import React from 'react';

import { Stack } from '../components/UI/atoms/Stack';
import { Button } from '../components/UI/atoms/Button';
import { FieldText } from '../components/UI/atoms/FieldText';

import * as S from '../styles/signUp';

export default function SignUp() {
  return (
    <S.Container>
      <S.CoverContainer>
        <S.Title>Conheça um novo mundo para realização de compras de jogos</S.Title>

        <S.Cover 
          width="500px"
          height= "336px" 
          src="/assets/welcome_cats.svg"
        />
      </S.CoverContainer>

      <S.Content>
        <S.SectionTitle>Criar conta na Maffei</S.SectionTitle>

        <FieldText label="Nome completo" name="name"  />

        <S.FieldGroup>
          <FieldText label="Telefone" name="phoneNumber"  />
          <FieldText label="Tipo de telefone" name="phoneNumberType"  />
        </S.FieldGroup>
        
        <S.FieldGroup>
          <FieldText label="Data de nascimento" name="birthDate"  />
          <FieldText label="CPF" name="documentNumber"  />
        </S.FieldGroup>
        
        <FieldText label="E-mail" name="email"  />
        
        <S.FieldGroup>
          <FieldText label="Senha" name="password"  />
          <FieldText label="Confirmar senha" name="confirmPassword"  />
        </S.FieldGroup>

        <Stack spacing="6rem">
          <Button label="Voltar" variant="ghost" />
          <Button label="Entrar" variant="solid" />
        </Stack>
      </S.Content>
    </S.Container>
  );
};
