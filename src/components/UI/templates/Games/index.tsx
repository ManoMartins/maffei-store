import Desktop from 'layout/desktop';
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';

import GameItem from 'components/UI/molecules/GameItem';
import FieldSearch from 'components/UI/atoms/FieldSearch';
import { IStoreProduct } from 'types/IStoreProduct';
import GameSkeleton from './GameSkeleton';
import GameBlank from './GameBlank';

interface IGamesProps {
  games?: IStoreProduct[];
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

            {!hasGames && !isLoading && <GameBlank />}

            {hasGames &&
              games.map(game => <GameItem key={game.id} storeProduct={game} />)}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Desktop>
  );
}
