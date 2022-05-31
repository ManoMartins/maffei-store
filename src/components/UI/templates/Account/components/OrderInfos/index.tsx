import Image from 'next/image';

import { Flex, Text, HStack, Heading } from '@chakra-ui/react';
import { IOrderOnStoreProducts } from 'types/IOrder';

interface IOrderInfos {
  orderOnStoreProducts: IOrderOnStoreProducts;
}

export default function OrderInfos({ orderOnStoreProducts }: IOrderInfos) {
  return (
    <HStack spacing="5">
      <Image
        width="217px"
        height="116px"
        objectFit="cover"
        alt={orderOnStoreProducts.storeProduct.name}
        src={orderOnStoreProducts.storeProduct.imageUri}
      />

      <Flex height="116px" flexDirection="column" justifyContent="flex-start">
        <Heading fontSize="lg">
          {orderOnStoreProducts.storeProduct.name}
        </Heading>
        <Text fontSize="sm">Possivel devolução até o dia 24 maio de 2022</Text>
      </Flex>
    </HStack>
  );
}
