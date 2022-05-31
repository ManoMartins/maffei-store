import { useMemo } from 'react';

import Title from 'components/UI/atoms/Title';
import Banner from 'components/UI/atoms/Banner';
import GameItem from 'components/UI/molecules/GameItem';

import { Box, Stack } from '@chakra-ui/react';

import { IStoreProduct } from 'types/IStoreProduct';

interface IGameListProps {
  title: string;
  games?: IStoreProduct[];
  gameBanner?: IStoreProduct;
}

export default function GameList({ title, games, gameBanner }: IGameListProps) {
  const hasGames = useMemo(() => games && games.length > 0, [games]);
  const firstFourGames = useMemo(() => {
    if (!games) return [];
    const randomNumber = [];
    const randomGames = Array.from(Array(4).keys());

    return randomGames.map(() => {
      let randomIndex = Math.floor(Math.random() * games.length);

      if (randomNumber.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * games.length);
      }

      randomNumber.push(randomIndex);
      return games[randomIndex];
    });
  }, [games]);

  return (
    <Box my="12" maxWidth="940px" mx="auto">
      <Title>{title}</Title>

      {gameBanner && <Banner storeProduct={gameBanner} />}

      <Stack direction="row" mt="6" spacing="6">
        {hasGames &&
          firstFourGames?.map(game => (
            <GameItem key={game.id} storeProduct={game} />
          ))}
      </Stack>
    </Box>
  );
}
