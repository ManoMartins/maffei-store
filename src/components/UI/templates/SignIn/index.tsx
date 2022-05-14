import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';
import FieldInput from 'components/UI/atoms/FieldInput';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
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
        width="60%"
        alignItems="center"
        flexDirection="column"
        color="blackAlpha.900"
        justifyContent="center"
        bgColor="whiteAlpha.900"
      >
        <Stack width="416px" spacing="4">
          <Heading mb="10" fontSize="2xl">
            Entre em Maffei
          </Heading>

          <FieldInput label="E-mail" />
          <FieldInput label="Senha" type="password" />

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
              borderRadius="2"
              color="whiteAlpha.900"
              transition="all 0.2s ease-in-out"
              _hover={{ filter: 'brightness(0.9)' }}
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
              onClick={e => {
                e.preventDefault();
              }}
            >
              Entrar
            </Button>
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex>
  );
}
