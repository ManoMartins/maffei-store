import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const SectionTitle = () => {
  return (
    <Stack direction="row" alignItems="flex-end"  spacing={1}>
      <Box  
        sx={{
          width: '8px',
          height: '32px',
          bgcolor: '#9146FF',
        }}
      />

      <Typography variant='h1' fontSize={24} fontWeight="bold">
        SectionTitle
      </Typography>
    </Stack>
  );
};
