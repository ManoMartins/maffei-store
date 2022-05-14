import { Box } from '@chakra-ui/react';
import { FiCreditCard, FiMapPin, FiShoppingBag, FiUser } from 'react-icons/fi';
import SideButton from '../SideButton';

export default function Side() {
  return (
    <Box minW="322px">
      <SideButton href="/account/profile" icon={FiUser} title="Meu perfil" />
      <SideButton
        href="/account/orders"
        icon={FiShoppingBag}
        title="Meus pedidos"
      />
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
    </Box>
  );
}
