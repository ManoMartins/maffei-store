import { HStack, Text, Badge } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
import { ICoupon } from 'types/ICoupon';

interface ICouponCardProps {
  coupon: ICoupon;
}

export default function CouponCard({ coupon }: ICouponCardProps) {
  return (
    <HStack
      color="blackAlpha.900"
      boxShadow="lg"
      padding="6"
      justifyContent="space-between"
      // opacity="0.5"
    >
      <HStack>
        <Text>
          <Text as="strong">Cupom: </Text>
          {coupon.voucherCode}
        </Text>

        <Badge colorScheme="red">{coupon.status}</Badge>
      </HStack>
      <Text d="flex" fontWeight="bold" alignItems="center">
        <FaEthereum />
        {coupon.discountPrice}
      </Text>
    </HStack>
  );
}
