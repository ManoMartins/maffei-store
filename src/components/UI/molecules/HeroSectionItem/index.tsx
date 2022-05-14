import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useCart } from 'contexts/cart';
import { MouseEvent, useCallback } from 'react';

export default function HeroSectionItem() {
  const { addProduct } = useCart();

  const handleAddProduct = useCallback(
    (event: MouseEvent<HTMLButtonElement>, productId: string) => {
      event.preventDefault();

      addProduct(productId);
    },
    [],
  );

  return (
    <Flex
      mx="auto"
      width="940px"
      height="526px"
      borderRadius="4"
      alignItems="flex-end"
      color="whiteAlpha.900"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      boxShadow="inset 0px -222px 50px rgba(0, 0, 0, 0.8)"
      backgroundImage="url(https://i.ytimg.com/vi/AI9zBBTyX-E/maxresdefault.jpg)"
    >
      <Flex
        justifyContent="space-around"
        direction="column"
        height="222px"
        px="10"
        pt="8"
        pb="10"
      >
        <Box>
          <Heading>Little Nightmares 2</Heading>

          <Text mt="2">
            Jogo o novo Little Nightmares 2, um jogo de aventura para se
            divertir e aproveitar o que o jogo tem a ofertar.
          </Text>
        </Box>

        <Box>
          <Button
            size="lg"
            borderRadius="2"
            bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
            transition="all 0.2s ease-in-out"
            _hover={{ filter: 'brightness(0.9)' }}
            onClick={e => handleAddProduct(e, '1')}
          >
            Comprar agora
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
