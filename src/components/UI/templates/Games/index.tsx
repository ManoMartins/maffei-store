import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import FieldSearch from 'components/UI/atoms/FieldSearch';
import GameItem from 'components/UI/molecules/GameItem';
import Desktop from 'layout/desktop';

export default function Games() {
  return (
    <Desktop>
      <Flex justifyContent="space-between">
        <Box>Filtros</Box>

        <Stack maxW="940px" spacing="4">
          <FieldSearch inputGroupProps={{ maxW: '458px' }} />

          <SimpleGrid columns={4} gap={6}>
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
          </SimpleGrid>
        </Stack>
      </Flex>
    </Desktop>
  );
}
