import { useCallback } from 'react';
import { useRouter } from 'next/router';

import Desktop from 'layout/desktop';

import { Box, Text, Heading, Button, Center, Stack } from '@chakra-ui/react';

export default function ThanksPage() {
  const router = useRouter();

  const handleKeepShopping = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Desktop>
      <Center flexDirection="column">
        <Box width="48" height="2" bgColor="secondary.900" />

        <Heading
          as="h1"
          mt="10"
          mb="20"
          fontSize="6xl"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          Obrigado
        </Heading>

        <Text fontSize="xl" letterSpacing="widest" textTransform="uppercase">
          Sua compra foi realizada com sucesso.
        </Text>

        {router.query.voucherCode && (
          <Stack textAlign="center" mt="8" spacing="1" fontSize="sm">
            <Text letterSpacing="widest" textTransform="uppercase">
              Um código de desconto foi gerado para você. Segue o código abaixo
            </Text>
            <Text as="strong">{router.query.voucherCode}</Text>
          </Stack>
        )}

        <Button
          mt="24"
          size="lg"
          borderRadius="2"
          bgColor="secondary.900"
          transition="all 0.2s ease-in-out"
          onClick={handleKeepShopping}
          _hover={{
            filter: 'brightness(0.85)',
          }}
        >
          Continuar comprando
        </Button>
      </Center>
    </Desktop>
  );
}
