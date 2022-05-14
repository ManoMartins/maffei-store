import { Box, Stack } from '@chakra-ui/react';
import Banner from 'components/UI/atoms/Banner';
import Title from 'components/UI/atoms/Title';
import GameItem from 'components/UI/molecules/GameItem';

export default function GameList() {
  return (
    <Box my="12" maxWidth="940px" mx="auto">
      <Title>Lançamentos</Title>

      <Banner />

      <Stack direction="row" mt="6" spacing="6">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </Stack>
    </Box>
  );
}
