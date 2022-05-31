import Link from 'next/link';
import { useCallback, MouseEvent } from 'react';

import { useCart } from 'contexts/cart';

import { Button, Flex, Heading, Text, TextProps } from '@chakra-ui/react';

import { IStoreProduct } from 'types/IStoreProduct';

enum DescriptionEnum {
  left = 'left',
  right = 'right',
}

interface IBannerProps {
  storeProduct: IStoreProduct;
}

export default function Banner({ storeProduct }: IBannerProps) {
  const { addProduct } = useCart();

  const container = {
    left: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    right: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  };

  const content = {
    left: {
      alignItems: 'flex-start',
    },
    right: {
      alignItems: 'flex-end',
    },
  };

  const textAlign: Record<DescriptionEnum, TextProps> = {
    left: {
      textAlign: 'start',
    },
    right: {
      textAlign: 'end',
    },
  };

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
        <Flex
          mx="auto"
          width="940px"
          height="313.33"
          borderRadius="4"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          boxShadow="inset 0 0 1rem 100rem rgba(0, 0, 0, 0.5)"
          backgroundImage={`url(${storeProduct.imageUri})`}
          padding="8"
          {...container.right}
        >
          <Flex flexDirection="column" width="96" {...content.right}>
            <Heading fontSize="3xl" color="white">
              {storeProduct.name}
            </Heading>

            <Text mt="1" mb="6" noOfLines={3} {...textAlign.right}>
              {storeProduct.summary}
            </Text>

            <Button
              size="lg"
              borderRadius="2"
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
              transition="all 0.2s ease-in-out"
              _hover={{ filter: 'brightness(0.9)' }}
              onClick={e => handleAddProduct(e, storeProduct.id)}
            >
              Comprar agora
            </Button>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
