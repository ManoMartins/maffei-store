import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from 'contexts/auth';

import FieldInputRegister from 'components/UI/atoms/FormRHF/FieldInputRegister';

import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';

import schema from './schema';

export interface IFormSignIn {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();
  const { push } = useRouter();

  const onSubmit: SubmitHandler<IFormSignIn> = async data => {
    try {
      await signIn(data);

      push('/');
    } catch (error) {
      console.error(error);

      alert('Falha no login');
    }
  };

  return (
    <Flex>
      <Flex
        width="40%"
        height="100vh"
        direction="column"
        alignItems="center"
        bgColor="primary.200"
        color="blackAlpha.900"
        justifyContent="center"
      >
        <Heading fontSize="3xl" mb="32" color="#5239B2" width="96">
          Conheça um novo mundo para realização de compras de jogos
        </Heading>

        <Image
          width="500px"
          height="336px"
          alt="Video game"
          src="/assets/video_game.svg"
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
            Entre em Maffei
          </Heading>

          <FieldInputRegister
            error={errors.email}
            name="email"
            label="E-mail"
            register={register}
          />
          <FieldInputRegister
            error={errors.password}
            name="password"
            label="Senha"
            type="password"
            register={register}
          />

          <ButtonGroup justifyContent="space-between">
            <Link href="/sign-up">
              <a>
                <Button
                  variant="ghost"
                  borderRadius="2"
                  color="primary.900"
                  _hover={{
                    bgColor: 'blackAlpha.50',
                  }}
                >
                  Criar conta
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
              Entrar
            </Button>
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex>
  );
}
