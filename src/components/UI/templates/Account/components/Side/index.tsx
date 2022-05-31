import { useAuth } from 'contexts/auth';

import Button from 'components/UI/atoms/Button';

import {
  FiUser,
  FiLogOut,
  FiMapPin,
  FiCreditCard,
  FiShoppingBag,
  FiTag,
} from 'react-icons/fi';
import { Box } from '@chakra-ui/react';

import SideButton from '../SideButton';

export default function Side() {
  const { signOut } = useAuth();

  return (
    <Box minW="322px">
      <SideButton href="/account/profile" icon={FiUser} title="Meu perfil" />
      <SideButton
        href="/account/orders"
        icon={FiShoppingBag}
        title="Meus pedidos"
      />
      <SideButton href="/account/coupons" icon={FiTag} title="Meus cupons" />
      <SideButton
        href="/account/cards"
        icon={FiCreditCard}
        title="Meus cartões"
      />
      <SideButton
        href="/account/addresses"
        icon={FiMapPin}
        title="Meus endereços"
      />
      <Button
        w="full"
        h="56px"
        onClick={signOut}
        leftIcon={<FiLogOut />}
        justifyContent="flex-start"
      >
        Sair
      </Button>
    </Box>
  );
}
