import { ReactNode } from 'react';

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
}

export interface IAuthContextValues {
  signIn: (data: ISignInPayload) => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface IAuthContextProviderProps {
  children: ReactNode;
}

export interface ISignInResponse {
  access_token: string;
  id: string;
  name: string;
}

export interface AuthStorage {
  accessToken: string;
  userData: User;
}
