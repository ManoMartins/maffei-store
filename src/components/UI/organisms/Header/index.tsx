import { Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Image from 'next/image';
import { Link } from '../../atoms/Link';
export const Header = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          {/* <Image src="/assets/logo.png" width="240px" height="135px" alt="Logo" /> */}

          <Stack direction="row" spacing={2}>
            <Link href='/' label="Home" />

            <Link href='/products' label='Produtos' />
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Link href='/sign-in' label='Entrar' />
          
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
};
