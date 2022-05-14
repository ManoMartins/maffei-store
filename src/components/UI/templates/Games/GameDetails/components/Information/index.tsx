import { Box } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import DetailsList from 'components/UI/organisms/DetailsList';

export default function Information() {
  return (
    <Box mt="28">
      <Title>Informações</Title>

      <DetailsList />
    </Box>
  );
}
