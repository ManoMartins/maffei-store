import { Stack } from '@mui/material';
import { SectionCard } from 'atoms/SectionCard';
import React from 'react';

export const SectionCardList = () => {
  return (
    <Stack direction="row" spacing={2.2}>
      <SectionCard />
      <SectionCard />
      <SectionCard />
      <SectionCard />
      <SectionCard />
    </Stack>
  );
};
