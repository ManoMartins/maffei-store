import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { useCart } from 'contexts/cart';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, MouseEvent } from 'react';

export default function GameItem() {
  const { addProduct } = useCart();

  const handleAddProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, productId: string) => {
      event.preventDefault();

      addProduct(productId);
    },
    [],
  );

  return (
    <Link href="/games/f1-22">
      <a>
        <Box
          bgColor="whiteAlpha.900"
          maxWidth="217px"
          minWidth="217px"
          borderRadius="2"
        >
          <Image
            alt="F1 22"
            width="217px"
            height="116px"
            objectFit="cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1692250/header.jpg?t=1651741941"
          />

          <Stack spacing="4" px="4" py="2">
            <Heading color="blackAlpha.900" fontSize="lg">
              F1 22
            </Heading>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color="blackAlpha.900" fontSize="sm">
                R$ 199,99
              </Text>

              <Button
                size="sm"
                borderRadius="2"
                color="whiteAlpha.900"
                bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
                _hover={{
                  filter: 'brightness(0.9)',
                }}
                onClick={e => {
                  handleAddProduct(e, '1');
                }}
              >
                Comprar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </a>
    </Link>
  );
}
