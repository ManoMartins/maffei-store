// Vendors
import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

// Functions

// Styles
import { useToast } from '@chakra-ui/react';

// Types
import api from 'services';

import {
  User,
  AuthStorage,
  ISignInResponse,
  IAuthContextValues,
  IAuthContextProviderProps,
  ISignInPayload,
} from './types';

export const STORAGE_KEYS = `@maffei/auth`;

const AuthContext = createContext({} as IAuthContextValues);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants.
  |-----------------------------------------------------------------------------
  |
  |
  */

  const toast = useToast();

  /*
  |-----------------------------------------------------------------------------
  | States.
  |-----------------------------------------------------------------------------
  |
  |
  */

  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /*
  |-----------------------------------------------------------------------------
  | Functions.
  |-----------------------------------------------------------------------------
  |
  |
  */

  const setAuthDataToCookie = useCallback((authData: AuthStorage) => {
    setCookie(null, STORAGE_KEYS, btoa(JSON.stringify(authData)), {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
  }, []);

  const getAuthDataFromCookie = useCallback(() => {
    const authDataString = get(parseCookies(), STORAGE_KEYS);
    if (!authDataString) return null;

    const authData = JSON.parse(atob(authDataString)) as AuthStorage;

    return authData;
  }, []);

  const clearAuthDataFromStorage = useCallback(() => {
    destroyCookie(null, STORAGE_KEYS);
  }, []);

  const signIn = useCallback(
    async (signInPayload: ISignInPayload) => {
      setIsLoading(true);

      try {
        const apiResponse = await api.post<ISignInResponse>(
          '/session',
          signInPayload,
        );

        const {
          data: { access_token: accessToken, id, name },
        } = apiResponse;

        setUser({ id, name });
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        setAuthDataToCookie({ accessToken, userData: { id, name } });

        if (router.query.redirectPath) {
          router.push(`/${router.query.redirectPath}`);
        } else {
          router.push('/');
        }

        toast({
          title: 'Sucesso',
          description: 'Login feito com sucesso!',
          status: 'success',
          isClosable: true,
        });
      } catch (error: unknown) {
        alert('Falha no login');
      } finally {
        setIsLoading(false);
      }
    },
    [setAuthDataToCookie, router, toast],
  );

  const signOut = useCallback(async () => {
    clearAuthDataFromStorage();
    setUser(null);
    api.defaults.headers.common.Authorization = '';
    router.push('/');
  }, [clearAuthDataFromStorage, router]);

  /*
  |-----------------------------------------------------------------------------
  | Effects.
  |-----------------------------------------------------------------------------
  |
  |
  */
  useEffect(() => {
    setIsLoading(true);

    const authData = getAuthDataFromCookie();

    if (!authData) {
      setIsLoading(false);
      return;
    }

    const { accessToken, userData } = authData;

    setUser(userData);
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setIsLoading(false);
  }, [getAuthDataFromCookie]);

  /*
  |-----------------------------------------------------------------------------
  | Memos.
  |-----------------------------------------------------------------------------
  |
  |
  */
  const authContextValue: IAuthContextValues = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      isLoading,
      isAuthenticated: !!user,
    }),
    [isLoading, signIn, signOut, user],
  );

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
