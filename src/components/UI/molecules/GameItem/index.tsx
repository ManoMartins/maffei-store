import Link from 'next/link';
import Image from 'next/image';
import { useCallback, MouseEvent } from 'react';

import { useCart } from 'contexts/cart';

import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

import { IGame } from 'types/IGame';
import formatCurrency from 'helpers/format/currency';

interface IGameItemProps {
  game: IGame;
}

export default function GameItem({ game }: IGameItemProps) {
  const { addProduct } = useCart();

  const handleAddProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, productId: string) => {
      event.preventDefault();

      addProduct(productId);
    },
    [],
  );

  return (
    <Link href={`/games/${game.slug}`}>
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
              {game.name}
            </Heading>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color="blackAlpha.900" fontSize="sm">
                {formatCurrency(game.price)}
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
                  handleAddProduct(e, game.id);
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
