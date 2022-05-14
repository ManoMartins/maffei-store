import {
  Box,
  Heading,
  HeadingProps,
  Stack,
  StackProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

enum PlacementEnum {
  left = 'left',
  bottom = 'bottom',
}

interface ITitleProps extends HeadingProps {
  stackProps?: StackProps;
  children: string | ReactNode;
  placement?: keyof typeof PlacementEnum;
}

export default function Title({
  children,
  stackProps,
  placement = 'left',
  ...rest
}: ITitleProps) {
  const placementProps: Record<PlacementEnum, StackProps> = {
    left: {
      spacing: '4',
      direction: 'row',
      alignItems: 'center',
    },
    bottom: {
      spacing: '2',
      direction: 'column',
      alignItems: 'flex-start',
    },
  };

  return (
    <Stack mb="8" {...placementProps[placement]} {...stackProps}>
      {placement === 'left' && (
        <Box width="2" height="8" bgColor="primary.900" />
      )}

      <Heading fontSize="2xl" {...rest}>
        {children}
      </Heading>

      {placement === 'bottom' && (
        <Box width="10" height="1" bgColor="primary.900" />
      )}
    </Stack>
  );
}
