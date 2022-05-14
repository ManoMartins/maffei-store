import { Box, Heading, Stack, Text } from '@chakra-ui/react';

export default function GameBlank() {
  return (
    <Box gridColumn="1/3">
      <Stack alignItems="center">
        <Heading fontSize="3xl">Nenhum resultado encontrado</Heading>
        <Text>Infelizmente não obtivemos nenhum resultado da sua busca</Text>
      </Stack>
    </Box>
  );
}
