import { Divider, Stack } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import AccountItem from 'components/UI/molecules/AccountItem';
import Desktop from 'layout/desktop';
import CardItem from '../components/CardItem';
import Side from '../components/Side';

export default function Cards() {
  return (
    <Desktop>
      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus cartões">
            <Stack
              spacing="6"
              divider={<Divider borderColor="blackAlpha.500" />}
            >
              <CardItem />
              <CardItem />
            </Stack>
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
