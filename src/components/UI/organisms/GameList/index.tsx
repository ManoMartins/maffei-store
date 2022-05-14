import { useMemo } from 'react';

import Title from 'components/UI/atoms/Title';
import Banner from 'components/UI/atoms/Banner';
import GameItem from 'components/UI/molecules/GameItem';

import { Box, Stack } from '@chakra-ui/react';

import { IGame } from 'types/IGame';

interface IGameListProps {
  title: string;
  games?: IGame[];
  gameBanner?: IGame;
}

export default function GameList({ title, games, gameBanner }: IGameListProps) {
  const hasGames = useMemo(() => games && games.length > 0, [games]);
  const firstFourGames = useMemo(() => {
    return games?.slice(0, 4);
  }, [games]);

  return (
    <Box my="12" maxWidth="940px" mx="auto">
      <Title>{title}</Title>

      {gameBanner && <Banner game={gameBanner} />}

      <Stack direction="row" mt="6" spacing="6">
        {hasGames &&
          firstFourGames?.map(game => <GameItem key={game.id} game={game} />)}
      </Stack>
    </Box>
  );
}
