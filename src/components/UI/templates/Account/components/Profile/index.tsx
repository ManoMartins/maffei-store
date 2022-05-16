import { MouseEvent, useCallback } from 'react';

import Desktop from 'layout/desktop';
import { Box, Button, SimpleGrid, Stack } from '@chakra-ui/react';

import Title from 'components/UI/atoms/Title';
import FieldInput from 'components/UI/atoms/FieldInput';
import AccountItem from 'components/UI/molecules/AccountItem';
import Side from '../Side';

export default function Profile() {
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
            <SimpleGrid columns={2} gap={6} color="blackAlpha.900">
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Nome"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Sobrenome"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Tipo de telefone"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Telefone"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="E-mail"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="CPF"
                isDisabled
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Gênero"
              />
              <FieldInput
                _placeholder={{ color: 'blackAlpha.500' }}
                label="Data de nascimento"
                isDisabled
              />

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
