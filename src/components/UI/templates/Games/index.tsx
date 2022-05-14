import Desktop from 'layout/desktop';
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';

import GameItem from 'components/UI/molecules/GameItem';
import FieldSearch from 'components/UI/atoms/FieldSearch';
import { IGame } from 'types/IGame';
import GameSkeleton from './GameSkeleton';
import GameBlank from './GameBlank';

interface IGamesProps {
  games?: IGame[];
  isLoading: boolean;
}

export default function Games({ games, isLoading }: IGamesProps) {
  const hasGames = games?.length > 0;

  return (
    <Desktop>
      <Flex justifyContent="space-between">
        <Box>Filtros</Box>

        <Stack maxW="940px" spacing="4">
          <FieldSearch inputGroupProps={{ maxW: '458px' }} />

          <SimpleGrid w="full" columns={4} gap={6}>
            {isLoading && <GameSkeleton />}

            {!hasGames && <GameBlank />}

            {hasGames &&
              games.map(game => <GameItem key={game.id} game={game} />)}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Desktop>
  );
}
