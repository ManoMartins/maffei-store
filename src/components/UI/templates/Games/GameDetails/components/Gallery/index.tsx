import { Box, Stack } from '@chakra-ui/react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <Stack direction="row" my="20">
      <Box>
        <Image
          width="400px"
          height="224px"
          alt="elden ring"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1649774637"
        />
      </Box>

      <Box>
        <Image
          width="400px"
          height="224px"
          alt="elden ring"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_3aec1455923ef49f4e777c2a94dbcd0256f77eb0.600x338.jpg?t=1649774637"
        />
      </Box>

      <Box>
        <Image
          width="400px"
          height="224px"
          alt="elden ring"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_b87601dee58f4dbc36e40a8d803dc6a53ceefe07.600x338.jpg?t=1649774637"
        />
      </Box>
    </Stack>
  );
}
