import { Box, Button, ButtonGroup, Grid, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Image from 'next/image';
import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FieldMask } from '../components/UI/atoms/FieldMask';
import ptLocale from "date-fns/locale/pt-BR";
export default function SignUp() {
  const [value, setValue] = useState("")

  return (
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
          src="/assets/welcome_cats.svg"
        />
      </Stack>

      <Box sx={{
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h1" component="h1" fontSize="1.75rem" fontWeight="bold">Criar conta na Maffei</Typography>

          <Grid container spacing={2} columns={2} mt={4}>
            <Grid item xs={1}>
              <TextField variant="outlined" label="Nome" name="firstName" fullWidth />
            </Grid>

            <Grid item xs={1}>
              <TextField variant="outlined" label="Sobrenome" name="lastName" fullWidth />
            </Grid>

            <Grid item xs={2} >
            < TextField variant="outlined" label="E-mail" name="email" fullWidth />
            </Grid>

            <Grid item xs={1}>
              <TextField variant="outlined" label="Tipo de telefone" name="phoneNumberType" fullWidth />
            </Grid>

            <Grid item xs={1}>
              <FieldMask mask="(99) 99999-9999" alwaysShowMask={false} label="Telefone" name="phoneNumber" />
            </Grid>

            <Grid item xs={2}>
              <FieldMask mask="999.999.999-99" alwaysShowMask={false} name='documentNumber' label='CPF' />
            </Grid>

            <Grid item xs={1}>
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
                <DatePicker
                  label="Data de nascimento"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={1}>
              <TextField variant="outlined" label="Gênero" name="gender" fullWidth />
            </Grid>

            <Grid item xs={1}>
              <TextField variant="outlined" label="Senha" name="password" fullWidth />
            </Grid>
            
            <Grid item xs={1}>
              <TextField variant="outlined" label="Confirmar senha" name="confirmPassword" fullWidth />
            </Grid>
          </Grid>
    
          <Stack direction="row" justifyContent="space-between" marginTop={2}>
            <Button variant="text" size="large" sx={{ width: '10rem' }}>Voltar</Button>
                
            <Button variant="contained" size="large" sx={{ width: '10rem' }}>Criar</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
