import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

import api from 'services';

import { useAuth } from 'contexts/auth';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import FieldInput from 'components/UI/atoms/FieldInput';
import AccountItem from 'components/UI/molecules/AccountItem';
import FieldInputRegister from 'components/UI/atoms/FormRHF/FieldInputRegister';
import FieldSelectRegister from 'components/UI/atoms/FormRHF/FieldSelectRegister';
import FieldMaskController from 'components/UI/atoms/FormRHF/FieldMaskController';

import Desktop from 'layout/desktop';
import { Box, Button, SimpleGrid, Stack } from '@chakra-ui/react';

import Side from '../Side';

enum PhoneNumberTypeEnum {
  mobile = 'mobile',
  home = 'home',
}

enum GenderEnum {
  M = 'M',
  F = 'F',
  NOT_INFORMED = 'NOT_INFORMED',
}

interface IFormProfile {
  name: string;
  email: string;
  phoneNumber: string;
  documentNumber: string;
  phoneNumberType: string;
  gender: string;
  birthDate: Date;
}

export default function Profile() {
  const { reset, control, register } = useForm<IFormProfile>();
  const { isAuthenticated } = useAuth();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);

    api
      .get(`/me`)
      .then(response => {
        reset({
          ...response.data,
          birthDate: format(new Date(response.data.birthDate), 'yyyy-MM-dd'),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [reset, isAuthenticated]);

  const onSubmitProfile = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      alert('Submit profile');
    },
    [],
  );

  const onSubmitPassword = useCallback(
    (event: MouseEvent<HTMLButtonElement>, data: string) => {
      event.preventDefault();
      alert(`Submit password ${data}`);
    },
    [],
  );

  return (
    <Desktop>
      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meu perfil">
            {isLoading && <Loader />}

            {!isLoading && (
              <SimpleGrid columns={2} gap={6} color="blackAlpha.900">
                <FieldInputRegister
                  name="name"
                  label="Nome"
                  register={register}
                  _placeholder={{ color: 'blackAlpha.500' }}
                />

                <FieldSelectRegister
                  name="phoneNumberType"
                  label="Tipo de telefone"
                  register={register}
                  options={[
                    { value: PhoneNumberTypeEnum.mobile, label: 'Celular' },
                    { value: PhoneNumberTypeEnum.home, label: 'Residencial' },
                  ]}
                  _placeholder={{ color: 'blackAlpha.500' }}
                />

                <FieldMaskController
                  name="phoneNumber"
                  label="Telefone"
                  control={control}
                  mask="(99) 99999-9999"
                  _placeholder={{ color: 'blackAlpha.500' }}
                />

                <FieldInputRegister
                  name="email"
                  label="E-mail"
                  register={register}
                  _placeholder={{ color: 'blackAlpha.500' }}
                />

                <FieldMaskController
                  name="documentNumber"
                  label="CPF"
                  control={control}
                  mask="999.999.999-99"
                  _placeholder={{ color: 'blackAlpha.500' }}
                  isDisabled
                />

                <FieldSelectRegister
                  name="gender"
                  label="Gênero"
                  register={register}
                  options={[
                    { value: GenderEnum.M, label: 'Masculino' },
                    { value: GenderEnum.F, label: 'Feminino' },
                    { value: GenderEnum.NOT_INFORMED, label: 'Não informado' },
                  ]}
                  _placeholder={{ color: 'blackAlpha.500' }}
                />

                <FieldInputRegister
                  name="birthDate"
                  label="Data de nascimento"
                  register={register}
                  _placeholder={{ color: 'blackAlpha.500' }}
                  type="date"
                  isDisabled
                />

                <Box />
                <Box />

                <Button
                  borderRadius="2"
                  color="whiteAlpha.900"
                  bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'brightness(0.9)' }}
                  onClick={e => onSubmitProfile(e)}
                >
                  Salvar
                </Button>
              </SimpleGrid>
            )}
          </AccountItem>

          <AccountItem title="Minha senha">
            <SimpleGrid columns={2} gap={6} color="blackAlpha.900">
              <FieldInput label="Senha atual" />
              <Box />
              <FieldInput label="Nova senha" />
              <FieldInput label="Confirmar senha" />

              <Box />
              <Button
                borderRadius="2"
                color="whiteAlpha.900"
                bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
                transition="all 0.2s ease-in-out"
                _hover={{ filter: 'brightness(0.9)' }}
                onClick={e => onSubmitPassword(e, 'password')}
              >
                Salvar
              </Button>
            </SimpleGrid>
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
