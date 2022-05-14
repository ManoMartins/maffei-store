import { Flex } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import { ReactNode } from 'react';

interface IAccountItemProps {
  title: string;
  children: ReactNode;
}

export default function AccountItem({ title, children }: IAccountItemProps) {
  return (
    <Flex bgColor="whitesmoke" w="full" p="6" flexDirection="column">
      <Title color="blackAlpha.900" placement="bottom">
        {title}
      </Title>

      {children}
    </Flex>
  );
}
