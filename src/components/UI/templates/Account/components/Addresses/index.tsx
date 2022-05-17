import { useEffect, useState } from 'react';

import api from 'services';

import Title from 'components/UI/atoms/Title';
import AccountItem from 'components/UI/molecules/AccountItem';
import ModalAddress from 'components/UI/organisms/Modals/ModalAddress';

import Desktop from 'layout/desktop';
import { Divider, Stack, Text, useDisclosure } from '@chakra-ui/react';

import { IAddress } from 'types/IAddress';

import { useAuth } from 'contexts/auth';
import Loader from 'components/UI/atoms/Loader';
import Side from '../Side';
import AddressItem from '../AddressItem';

export default function Addresses() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useAuth();

  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasAddresses = addresses.length > 0;

  useEffect(() => {
    if (!isAuthenticated) return;
    setIsLoading(true);
    api
      .get<IAddress[]>('/address')
      .then(response => {
        setAddresses(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isAuthenticated]);

  return (
    <Desktop>
      <ModalAddress isOpen={isOpen} onClose={onClose} />

      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus endereços" cta={{ onClick: onOpen }}>
            <Stack
              spacing="6"
              divider={<Divider borderColor="blackAlpha.500" />}
            >
              {isLoading && <Loader />}

              {!hasAddresses && !isLoading && (
                <Stack>
                  <Text fontSize="sm" color="blackAlpha.500">
                    Você ainda não possui endereços.
                  </Text>
                </Stack>
              )}

              {hasAddresses &&
                addresses.map(address => (
                  <AddressItem key={address.id} address={address} />
                ))}
            </Stack>
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
