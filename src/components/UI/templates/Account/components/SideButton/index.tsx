import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

interface ISideButtonProps {
  href: string;
  title: string;
  icon: IconType;
}

export default function SideButton({
  href,
  title,
  icon: Icon,
}: ISideButtonProps) {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a>
        <HStack
          p="4"
          color={isActive ? 'whiteAlpha.900' : 'blackAlpha.900'}
          bgColor={isActive ? 'primary.900' : 'whitesmoke'}
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.9)' }}
        >
          <Icon />

          <Text fontWeight="bold">{title}</Text>
        </HStack>
      </a>
    </Link>
  );
}
