import { Stack } from "../components/UI/atoms/Stack";
import { Button } from "../components/UI/atoms/Button";
import { FieldText } from "../components/UI/atoms/FieldText";

import * as S from '../styles/login'

export default function Login() {
  return (
    <S.Container>
      <S.CoverContainer>
        <S.Title>Conheça um novo mundo para realização de compras de jogos</S.Title>

        <S.Cover 
          width="500px"
          height= "336px" 
          src="/assets/video_game.svg"
        />
      </S.CoverContainer>

      <S.Content>
        <S.SectionTitle>Entre em Maffei</S.SectionTitle>

        <FieldText label="E-mail" name="email"  />
        <FieldText label="Senha" name="password"  />

        <Stack spacing="6rem">
          <Button label="Criar conta" variant="ghost" />
          <Button label="Entrar" variant="solid" />
        </Stack>
      </S.Content>
    </S.Container>
  )
}