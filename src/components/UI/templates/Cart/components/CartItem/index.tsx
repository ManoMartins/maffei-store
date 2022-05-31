import Image from 'next/image';
import { MouseEvent, useCallback } from 'react';

import { useCart } from 'contexts/cart';
import { StoreProductCheckoutData } from 'contexts/cart/types';

import { FiX } from 'react-icons/fi';
import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';

import { FaEthereum } from 'react-icons/fa';
import Quantity from './Quantity';

interface ICartItemProps {
  storeProduct: StoreProductCheckoutData;
}

export default function CartItem({ storeProduct }: ICartItemProps) {
  const { removeProduct, updateProductQuantity } = useCart();

  const handleRemoveProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, storeProductId: string) => {
      event.preventDefault();
      removeProduct(storeProductId);
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
        alt={storeProduct.name}
        objectFit="cover"
        src={storeProduct.imageUri}
      />

      <Flex py="2" justifyContent="space-between" ml="6" w="full">
        <Flex flexDirection="column" justifyContent="space-between">
          <Heading w="full" fontSize="xl">
            {storeProduct.name}
          </Heading>

          <Quantity
            max={storeProduct.stock}
            defaultValue={storeProduct.quantity}
            onChange={e => updateProductQuantity(storeProduct.id, +e)}
          />
        </Flex>

        <Text
          d="flex"
          alignItems="center"
          alignSelf="end"
          w="36"
          fontWeight="bold"
        >
          <FaEthereum />
          {storeProduct.price}
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
        onClick={e => handleRemoveProduct(e, storeProduct.id)}
      />
    </Flex>
  );
}
