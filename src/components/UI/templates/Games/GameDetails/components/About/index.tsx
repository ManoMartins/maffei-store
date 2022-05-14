import { Box, Text } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';

export default function About() {
  return (
    <Box bgColor="white" color="blackAlpha.900" padding="8" borderRadius="2">
      <Title>Descrição</Title>

      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa,
        dignissimos deserunt soluta sapiente dolorum vel. Necessitatibus iste
        ipsum rerum illum, et praesentium tenetur autem at dolorem eaque beatae.
        Pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem voluptas aperiam ex natus sequi labore soluta unde voluptates
        tempora assumenda odio distinctio, cumque hic provident qui recusandae,
        esse quo cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur magni minus iusto natus, porro nobis impedit beatae nulla
        nam incidunt, nihil quos placeat, assumenda modi quia labore perferendis
        optio doloribus.
      </Text>
    </Box>
  );
}
