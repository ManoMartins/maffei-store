import Button from 'components/UI/atoms/Button';
import Modal from 'components/UI/molecules/Modal';
import FieldInput from 'components/UI/atoms/FieldInput';

import {
  ModalBody,
  SimpleGrid,
  ButtonGroup,
  ModalFooter,
} from '@chakra-ui/react';

interface IModalCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCard({ isOpen, onClose }: IModalCardProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cartão" size="xl">
      <ModalBody>
        <SimpleGrid gap={4} columns={2}>
          <FieldInput label="CPF do titular" />
          <FieldInput label="Número do cartão" />
          <FieldInput label="Nome do cartão" />
          <FieldInput label="Validade" />
          <FieldInput label="CVV" />
        </SimpleGrid>
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button
            variant="ghost"
            borderRadius="2"
            onClick={onClose}
            variantType="secondary"
          >
            Cancelar
          </Button>

          <Button>Salvar</Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
}
