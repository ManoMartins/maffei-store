import { useCallback, useEffect, useState } from 'react';

import api from 'services';

import { useAuth } from 'contexts/auth';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import AccountItem from 'components/UI/molecules/AccountItem';
import ModalCard from 'components/UI/organisms/Modals/ModalCard';

import Desktop from 'layout/desktop';
import { Divider, Stack, Text, useDisclosure } from '@chakra-ui/react';

import { ICreditCard } from 'types/ICreditCard';

import Side from '../Side';
import CardItem from '../CardItem';

export default function Cards() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useAuth();

  const [creditCards, setCreditCards] = useState<ICreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasCreditCards = creditCards.length > 0;

  const getCreditCart = useCallback(() => {
    setIsLoading(true);

    api
      .get<ICreditCard[]>('/credit-card')
      .then(response => {
        setCreditCards(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  useEffect(() => {
    if (!isAuthenticated) return;

    getCreditCart();
  }, [isAuthenticated]);

  return (
    <Desktop>
      <ModalCard isOpen={isOpen} onClose={onClose} reload={getCreditCart} />

      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus cartões" cta={{ onClick: onOpen }}>
            <Stack
              spacing="6"
              divider={<Divider borderColor="blackAlpha.500" />}
            >
              {isLoading && <Loader />}

              {!hasCreditCards && !isLoading && (
                <Stack spacing="6">
                  <Text fontSize="sm" color="blackAlpha.500">
                    Nenhum cartão cadastrado
                  </Text>
                </Stack>
              )}

              {hasCreditCards &&
                creditCards.map(creditCard => (
                  <CardItem key={creditCard.id} reload={getCreditCart} creditCard={creditCard} />
                ))}
            </Stack>
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
