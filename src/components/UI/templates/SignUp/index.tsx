import Link from 'next/link';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import FieldInputRegister from 'components/UI/atoms/FormRHF/FieldInputRegister';
import FieldSelectRegister from 'components/UI/atoms/FormRHF/FieldSelectRegister';
import FieldMaskController from 'components/UI/atoms/FormRHF/FieldMaskController';

import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';

import api from 'services';
import { useRouter } from 'next/router';
import schema from './schema';

enum PhoneNumberTypeEnum {
  mobile = 'mobile',
  home = 'home',
}

enum GenderEnum {
  M = 'M',
  F = 'F',
  NOT_INFORMED = 'NOT_INFORMED',
}

interface IFormData {
  name: string;
  lastName: string;
  phoneNumberType: PhoneNumberTypeEnum;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  documentNumber: string;
  gender: GenderEnum;
  birthDate: Date;
}

export default function SignUp() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { push } = useRouter();

  const onSubmit: SubmitHandler<IFormData> = async data => {
    try {
      await api.post('/user', { ...data, confirmPassword: undefined });

      alert('Cadastro realizado com sucesso!');

      push('/');
    } catch (error) {
      console.error(error);

      alert('Erro ao realizar o cadastro!');
    }
  };

  return (
    <Flex>
      <Flex
        width="40%"
        height="100vh"
        direction="column"
        alignItems="center"
        bgColor="#FFE180"
        color="blackAlpha.900"
        justifyContent="center"
      >
        <Heading fontSize="3xl" mb="32" color="#A0852C" width="96">
          Conheça um novo mundo para realização de compras de jogos
        </Heading>

        <Image
          width="500px"
          height="336px"
          alt="Video game"
          src="/assets/welcome_cats.svg"
        />
      </Flex>

      <Flex
        as="form"
        width="60%"
        alignItems="center"
        flexDirection="column"
        color="blackAlpha.900"
        justifyContent="center"
        bgColor="whiteAlpha.900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack width="416px" spacing="4">
          <Heading mb="10" fontSize="2xl">
            Criar conta na Maffei
          </Heading>

          <FieldInputRegister
            name="name"
            label="Nome"
            error={errors.name}
            register={register}
          />

          <FieldInputRegister
            name="email"
            label="E-mail"
            register={register}
            error={errors.email}
          />

          <Stack direction="row" spacing="4">
            <FieldSelectRegister
              register={register}
              name="phoneNumberType"
              label="Tipo de telefone"
              error={errors.phoneNumberType}
              options={[
                { value: PhoneNumberTypeEnum.mobile, label: 'Celular' },
                { value: PhoneNumberTypeEnum.home, label: 'Residencial' },
              ]}
            />
            <FieldMaskController
              name="phoneNumber"
              control={control}
              mask="(99) 99999-9999"
              error={errors.phoneNumber}
              label="Número de telefone"
            />
          </Stack>

          <FieldMaskController
            label="CPF"
            control={control}
            name="documentNumber"
            mask="999.999.999-99"
            error={errors.documentNumber}
          />

          <Stack direction="row" spacing="4">
            <FieldSelectRegister
              register={register}
              name="gender"
              label="Gênero"
              error={errors.gender}
              options={[
                { value: GenderEnum.M, label: 'Masculino' },
                { value: GenderEnum.F, label: 'Feminino' },
                { value: GenderEnum.NOT_INFORMED, label: 'Não informado' },
              ]}
            />
            <FieldInputRegister
              name="birthDate"
              type="date"
              label="Data de nascimento"
              register={register}
              error={errors.birthDate}
            />
          </Stack>

          <Stack direction="row" spacing="4">
            <FieldInputRegister
              name="password"
              label="Senha"
              type="password"
              register={register}
              error={errors.password}
            />

            <FieldInputRegister
              name="confirmPassword"
              label="Confirmar senha"
              type="password"
              register={register}
              error={errors.confirmPassword}
            />
          </Stack>

          <ButtonGroup justifyContent="space-between">
            <Link href="/sign-in">
              <a>
                <Button
                  variant="ghost"
                  borderRadius="2"
                  color="primary.900"
                  _hover={{
                    bgColor: 'blackAlpha.50',
                  }}
                >
                  Voltar
                </Button>
              </a>
            </Link>

            <Button
              type="submit"
              borderRadius="2"
              color="whiteAlpha.900"
              transition="all 0.2s ease-in-out"
              _hover={{ filter: 'brightness(0.9)' }}
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
            >
              Criar conta
            </Button>
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex>
  );
}
