import { Box, Button, ButtonGroup, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";


export default function SignIn() {
  return (
    // <S.Container>
    //   <S.CoverContainer>
    //     <S.Title>Conheça um novo mundo para realização de compras de jogos</S.Title>

    //     <S.Cover 
    //       width="500px"
    //       height= "336px" 
    //       src="/assets/video_game.svg"
    //     />
    //   </S.CoverContainer>

    //   <S.Content>
    //     <S.SectionTitle>Entre em Maffei</S.SectionTitle>

    //     <FieldText label="E-mail" name="email"  />
    //     <FieldText label="Senha" name="password"  />

    //     <Stack spacing="6rem">
    //       <Button label="Criar conta" variant="ghost" />
    //       <Button label="Entrar" variant="solid" />
    //     </Stack>
    //   </S.Content>
    // </S.Container>

    <Box sx={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
    }}>
      <Stack width="40%" alignItems="center">
        <Typography 
          variant="subtitle1" 
          fontSize="1.75rem" 
          fontWeight="bold" 
          lineHeight="42px" 
          width="25.5rem" 
          component="span"
          mb={18}
        >
          Conheça um novo mundo para realização de compras de jogos
        </Typography>

        <Image 
          width="500px"
          height= "336px" 
          alt="Video Game"
          src="/assets/video_game.svg"
        />
      </Stack>

      <Box sx={{
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Box width="50%">
          <Typography variant="h1" component="h1" fontSize="1.75rem" fontWeight="bold">Entre em Maffei</Typography>

          <Stack spacing={3} mt={10}>
            <TextField variant="outlined" label="E-mail" name="email" />
            <TextField variant="outlined" label="Senha" name="password" />
          </Stack>
    
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
            <Button variant="text" sx={{ width: '10rem' }}>Criar conta</Button>
            <Button variant="contained" sx={{ width: '10rem' }}>Entrar</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}