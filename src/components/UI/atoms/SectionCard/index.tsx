import { Button, Card as MuiCard, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaPlaystation, FaSteam, FaWindows, FaXbox } from 'react-icons/fa'

export const SectionCard = () => {
  return (
    <MuiCard>
      <Link href="/products" passHref>
        <CardActionArea LinkComponent="a" >
          <Image 
            width="216" 
            height="116"
            alt="hallow knight" 
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925" 
          />

          <CardContent>
            <Typography variant='h1' fontSize={16}>
              The Witcher 3: Wild Hunt
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <FaSteam />
              <FaWindows />
              <FaXbox />
              <FaPlaystation />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions
        sx={{
          justifyContent: 'space-around',
        }}
      >
        <Typography>
          R$ 24,00
        </Typography>
        
        <Button size='small' variant='contained'>
          Comprar
        </Button>
      </CardActions>
    </MuiCard>
  );
};
