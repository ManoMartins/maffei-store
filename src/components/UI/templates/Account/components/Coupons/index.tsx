import { Text, Stack } from '@chakra-ui/react';

import Desktop from 'layout/desktop';
import useFetch from 'hooks/useFetch';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import AccountItem from 'components/UI/molecules/AccountItem';

import { ICoupon } from 'types/ICoupon';

import Side from '../Side';
import CouponCard from './CouponCard';

export default function Coupons() {
  const { loading, response } = useFetch<ICoupon[]>({
    isPrivate: true,
    url: 'exchange-code',
  });

  const hasCoupons = response?.length > 0;

  return (
    <Desktop>
      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus cupons">
            {loading && <Loader />}

            {!hasCoupons && !loading && (
              <Stack>
                <Text fontSize="sm" color="blackAlpha.500">
                  Você ainda não possui vale troca.
                </Text>
              </Stack>
            )}

            {hasCoupons && !loading && (
              <Stack spacing="4">
                {response.map(coupon => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </Stack>
            )}
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
