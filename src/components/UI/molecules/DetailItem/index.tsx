import {
  Box,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  WrapItem,
  WrapItemProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDetailsProps {
  title: string;
  label: string | ReactNode;

  labelProps?: TextProps;
  titleProps?: HeadingProps;
  wrapItemProps?: WrapItemProps;
}

export default function DetailItem({
  title,
  label,
  titleProps,
  labelProps,
  wrapItemProps,
}: IDetailsProps) {
  return (
    <WrapItem width="230px" {...wrapItemProps}>
      <Box>
        <Heading
          color="whiteAlpha.700"
          fontWeight="normal"
          fontSize="sm"
          {...titleProps}
        >
          {title}
        </Heading>

        <Text fontWeight="medium" fontSize="lg" {...labelProps}>
          {label}
        </Text>
      </Box>
    </WrapItem>
  );
}
