import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import { ReactNode } from 'react';

interface ModalProps extends ChakraModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
  ...rest
}: ModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Title placement="bottom">{title}</Title>
        </ModalHeader>
        <ModalCloseButton />

        {children}
      </ModalContent>
    </ChakraModal>
  );
}
