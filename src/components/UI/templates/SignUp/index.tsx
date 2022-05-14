import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';
import FieldInput from 'components/UI/atoms/FieldInput';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
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
        width="60%"
        alignItems="center"
        flexDirection="column"
        color="blackAlpha.900"
        justifyContent="center"
        bgColor="whiteAlpha.900"
      >
        <Stack width="416px" spacing="4">
          <Heading mb="10" fontSize="2xl">
            Criar conta na Maffei
          </Heading>

          <Stack direction="row" spacing="4">
            <FieldInput label="Nome" />
            <FieldInput label="Sobrenome" />
          </Stack>

          <FieldInput label="E-mail" />

          <Stack direction="row" spacing="4">
            <FieldInput label="Tipo de telefone" />
            <FieldInput label="Número de telefone" />
          </Stack>

          <FieldInput label="CPF" />
          <Stack direction="row" spacing="4">
            <FieldInput label="Gênero" />
            <FieldInput label="Data de nascimento" />
          </Stack>

          <Stack direction="row" spacing="4">
            <FieldInput label="Senha" type="password" />
            <FieldInput label="Confirmar senha" type="password" />
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
              borderRadius="2"
              color="whiteAlpha.900"
              transition="all 0.2s ease-in-out"
              _hover={{ filter: 'brightness(0.9)' }}
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
              onClick={e => {
                e.preventDefault();
              }}
            >
              Criar conta
            </Button>
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex>
  );
}
