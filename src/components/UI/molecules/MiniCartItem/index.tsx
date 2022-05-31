import Image from 'next/image';
import { useCallback } from 'react';

import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

import { IStoreProduct } from 'types/IStoreProduct';
import { FaEthereum } from 'react-icons/fa';

interface IMiniCartProps {
  storeProduct: IStoreProduct;
  onRemoveProduct: (productId: string) => void;
}

export default function MiniCartItem({
  storeProduct,
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
          width="120px"
          height="64px"
          objectFit="cover"
          alt={storeProduct.name}
          src={storeProduct.imageUri}
        />
      </Box>
      <Stack alignItems="flex-start">
        <Box maxW="9rem">
          <Heading fontSize="md" isTruncated>
            {storeProduct.name}
          </Heading>
          <Text d="flex" alignItems="center" fontSize="sm" fontWeight="300">
            <FaEthereum />
            {storeProduct.price}
          </Text>
        </Box>
        <Button
          size="sm"
          variant="link"
          onClick={() => handleRemoveProduct(storeProduct.id)}
        >
          Remover
        </Button>
      </Stack>
    </Stack>
  );
}
