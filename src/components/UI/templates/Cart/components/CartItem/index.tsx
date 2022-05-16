import Image from 'next/image';
import { MouseEvent, useCallback } from 'react';

import { useCart } from 'contexts/cart';
import { ICartGame } from 'contexts/cart/types';

import { FiX } from 'react-icons/fi';
import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';

import formatCurrency from 'helpers/format/currency';

import Quantity from './Quantity';

interface ICartItemProps {
  game: ICartGame;
}

export default function CartItem({ game }: ICartItemProps) {
  const { removeProduct } = useCart();

  const handleRemoveProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, gameId: string) => {
      event.preventDefault();
      removeProduct(gameId);
    },
    [removeProduct],
  );

  return (
    <Flex
      px="6"
      py="4"
      maxH="140px"
      width="full"
      position="relative"
      color="blackAlpha.900"
      bgColor="whiteAlpha.900"
    >
      <Image
        width="217px"
        height="116px"
        alt={game.name}
        objectFit="cover"
        src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1649774637"
      />

      <Flex py="2" justifyContent="space-between" ml="6" w="full">
        <Flex flexDirection="column" justifyContent="space-between">
          <Heading w="52" fontSize="xl">
            {game.name}
          </Heading>

          <Quantity defaultValue={game.quantity} />
        </Flex>

        <Text alignSelf="end" w="36" fontWeight="bold">
          {formatCurrency(game.price)}
        </Text>
      </Flex>

      <IconButton
        size="sm"
        right="3"
        icon={<FiX />}
        variant="ghost"
        position="absolute"
        color="blackAlpha.700"
        aria-label="remove cart item"
        _hover={{
          bgColor: 'blackAlpha.100',
        }}
        onClick={e => handleRemoveProduct(e, game.id)}
      />
    </Flex>
  );
}
