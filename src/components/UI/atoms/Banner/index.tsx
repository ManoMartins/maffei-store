import Link from 'next/link';
import { useCallback, MouseEvent } from 'react';

import { Button, Flex, Heading, Text, TextProps } from '@chakra-ui/react';
import { useCart } from 'contexts/cart';

enum DescriptionEnum {
  left = 'left',
  right = 'right',
}

export default function Banner() {
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
    [],
  );

  return (
    <Link href="/games/elder-ring">
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
          backgroundImage="url(https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1649774637)"
          padding="8"
          {...container.right}
        >
          <Flex flexDirection="column" width="96" {...content.right}>
            <Heading fontSize="3xl" color="white">
              Elder ring
            </Heading>

            <Text mt="1" mb="6" {...textAlign.right}>
              O Elder Ring é um jogo de aventura para se divertir e aproveitar o
              que o jogo tem a ofertar.
            </Text>

            <Button
              size="lg"
              borderRadius="2"
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
              transition="all 0.2s ease-in-out"
              _hover={{ filter: 'brightness(0.9)' }}
              onClick={e => handleAddProduct(e, '12')}
            >
              Comprar agora
            </Button>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
