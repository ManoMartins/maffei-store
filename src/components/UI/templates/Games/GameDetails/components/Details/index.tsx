import {
  Box,
  Tag,
  Text,
  Flex,
  Stack,
  Button,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';

import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';

export default function Details() {
  return (
    <Box
      bgColor="white"
      color="blackAlpha.900"
      padding="8"
      borderRadius="2"
      mt="80"
    >
      <Flex justifyContent="space-between">
        <Title placement="bottom">Elder ring</Title>

        <Stack direction="row" spacing="2" h="8">
          <Tag bgColor="primary.100" color="primary.900">
            <TagLeftIcon as={FaSteam} />
            <TagLabel>Steam</TagLabel>
          </Tag>

          <Tag bgColor="primary.100" color="primary.900">
            <TagLeftIcon as={FaPlaystation} />
            <TagLabel>Playstation</TagLabel>
          </Tag>

          <Tag bgColor="primary.100" color="primary.900">
            <TagLeftIcon as={FaXbox} />
            <TagLabel>Xbox</TagLabel>
          </Tag>
        </Stack>
      </Flex>

      <Text mt="2" mb="14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo
        vero reprehenderit laboriosam totam at repellendus ipsam tenetur
        excepturi nemo eum ullam facilis eaque rerum consequuntur, numquam a!
        Quisquam, similique.
      </Text>

      <Stack
        spacing="6"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Text fontSize="xl" fontWeight="medium" color="primary.900">
          R$ 199,99
        </Text>

        <Button
          size="lg"
          borderRadius="2"
          color="whiteAlpha.900"
          _hover={{
            filter: 'brightness(0.9)',
          }}
          bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
        >
          Comprar
        </Button>
      </Stack>
    </Box>
  );
}
