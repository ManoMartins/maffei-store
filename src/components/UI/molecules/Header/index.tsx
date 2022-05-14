import Link from 'components/UI/atoms/Link';
import { FiShoppingCart } from 'react-icons/fi';
import { Badge, Box, Button, IconButton, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { useCallback } from 'react';
import { useCart } from 'contexts/cart';

export default function Header() {
  const { disclosureMiniCart } = useCart();

  const handleMiniCart = useCallback(() => {
    disclosureMiniCart.onOpen();
  }, []);

  return (
    <Stack
      mt="16"
      mb="20"
      direction="row"
      color="whiteAlpha.900"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing="4" alignItems="center">
        <Image
          alt="Maffei"
          width="100px"
          height="32px"
          objectFit="cover"
          src="/assets/logo.png"
        />

        <Link label="Home" href="/" isActive />

        <Link label="Jogos" href="/games" />
      </Stack>

      <Stack direction="row" spacing="4">
        <Box position="relative">
          <IconButton
            display="flex"
            variant="ghost"
            aria-label="cart"
            alignItems="center"
            justifyContent="center"
            icon={<FiShoppingCart size={20} />}
            onClick={handleMiniCart}
            _hover={{
              bgColor: 'whiteAlpha.100',
            }}
          />

          <Badge top="-1" right="-1" position="absolute">
            3
          </Badge>
        </Box>

        <Button
          as={Link}
          color="white"
          label="Entrar"
          href="/sign-in"
          borderRadius="2"
          bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.9)', color: 'white' }}
        />
      </Stack>
    </Stack>
  );
}
