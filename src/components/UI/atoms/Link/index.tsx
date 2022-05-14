import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ILinkProps extends LinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}
export default function Link({ href, label, ...rest }: ILinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <NextLink href={href}>
      <ChakraLink
        fontWeight="medium"
        textDecoration="none"
        _hover={{
          color: 'primary.900',
          textDecoration: 'none',
        }}
        _after={{
          mt: '4px',
          width: '98%',
          height: '3px',
          content: '""',
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity 0.2s',
          backgroundColor: isActive ? 'primary.900' : '',
        }}
        {...rest}
      >
        {label}
      </ChakraLink>
    </NextLink>
  );
}
