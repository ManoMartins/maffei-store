import Image from 'next/image';
import { useCallback } from 'react';

import formatCurrency from 'helpers/format/currency';

import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

import { IGame } from 'types/IGame';

interface IMiniCartProps {
  game: IGame;
  onRemoveProduct: (productId: string) => void;
}

export default function MiniCartItem({
  game,
  onRemoveProduct,
}: IMiniCartProps) {
  const handleRemoveProduct = useCallback(
    (gameId: string) => {
      onRemoveProduct(gameId);
    },
    [onRemoveProduct],
  );

  return (
    <Stack direction="row" spacing="5">
      <Box minWidth="120px" minHeight="64px" maxWidth="120px" maxHeight="64px">
        <Image
          alt="F1 22"
          width="120px"
          height="64px"
          objectFit="cover"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1692250/header.jpg?t=1651741941"
        />
      </Box>
      <Stack alignItems="flex-start">
        <Box maxW="9rem">
          <Heading fontSize="md" isTruncated>
            {game.name}
          </Heading>
          <Text fontSize="sm" fontWeight="300">
            {formatCurrency(game.price)}
          </Text>
        </Box>
        <Button
          size="sm"
          variant="link"
          onClick={() => handleRemoveProduct(game.id)}
        >
          Remover
        </Button>
      </Stack>
    </Stack>
  );
}
