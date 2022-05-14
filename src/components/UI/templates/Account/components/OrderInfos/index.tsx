import Image from 'next/image';

import { Flex, Text, HStack, Heading } from '@chakra-ui/react';

export default function OrderInfos() {
  return (
    <HStack spacing="5">
      <Image
        alt="F1 22"
        width="217px"
        height="116px"
        objectFit="cover"
        src="https://cdn.cloudflare.steamstatic.com/steam/apps/1692250/header.jpg?t=1651741941"
      />

      <Flex height="116px" flexDirection="column" justifyContent="flex-start">
        <Heading fontSize="lg">F1 22</Heading>
        <Text fontSize="sm">Possivel devolução até o dia 24 maio de 2022</Text>
      </Flex>
    </HStack>
  );
}
