import { Flex, Stack } from '@chakra-ui/react';
import Button from 'components/UI/atoms/Button';
import Title from 'components/UI/atoms/Title';
import { ReactNode } from 'react';

interface IAccountItemProps {
  title: string;
  children: ReactNode;
  cta?: {
    onClick: () => void;
  };
}

export default function AccountItem({
  title,
  children,
  cta,
}: IAccountItemProps) {
  return (
    <Flex bgColor="whitesmoke" w="full" p="6" flexDirection="column">
      <Stack direction="row" justifyContent="space-between">
        <Title color="blackAlpha.900" placement="bottom">
          {title}
        </Title>

        {!!cta && (
          <Button size="sm" onClick={cta.onClick}>
            Adicionar
          </Button>
        )}
      </Stack>
      {children}
    </Flex>
  );
}
