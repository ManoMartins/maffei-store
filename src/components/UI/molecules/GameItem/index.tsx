import Link from 'next/link';
import Image from 'next/image';
import { useCallback, MouseEvent } from 'react';

import { useCart } from 'contexts/cart';

import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

import { IStoreProduct } from 'types/IStoreProduct';
import { FaEthereum } from 'react-icons/fa';

interface IGameItemProps {
  storeProduct: IStoreProduct;
}

export default function GameItem({ storeProduct }: IGameItemProps) {
  const { addProduct } = useCart();

  const handleAddProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, productId: string) => {
      event.preventDefault();

      addProduct(productId);
    },
    [addProduct],
  );

  return (
    <Link href={`/games/${storeProduct.slug}`}>
      <a>
        <Box
          bgColor="whiteAlpha.900"
          maxWidth="217px"
          minWidth="217px"
          borderRadius="2"
        >
          <Image
            width="217px"
            height="116px"
            objectFit="cover"
            alt={storeProduct.name}
            src={storeProduct.imageUri}
          />

          <Stack spacing="4" px="4" py="2">
            <Heading color="blackAlpha.900" fontSize="lg" isTruncated>
              {storeProduct.name}
            </Heading>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                d="flex"
                alignItems="center"
                color="blackAlpha.900"
                fontSize="sm"
              >
                <FaEthereum />
                {storeProduct.price}
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
                  handleAddProduct(e, storeProduct.id);
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
