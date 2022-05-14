import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function MiniCartItem() {
  return (
    <Stack direction="row" spacing="5">
      <Image
        alt="F1 22"
        width="120px"
        height="64px"
        objectFit="cover"
        src="https://cdn.cloudflare.steamstatic.com/steam/apps/1692250/header.jpg?t=1651741941"
      />

      <Stack>
        <Box>
          <Heading fontSize="md">F1 22</Heading>
          <Text fontSize="sm" fontWeight="300">
            R$ 39,99
          </Text>
        </Box>
        <Button size="sm" variant="link">
          Remover
        </Button>
      </Stack>
    </Stack>
  );
}
