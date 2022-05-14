import Button from 'components/UI/atoms/Button';
import Modal from 'components/UI/molecules/Modal';
import FieldInput from 'components/UI/atoms/FieldInput';

import {
  ModalBody,
  SimpleGrid,
  ButtonGroup,
  ModalFooter,
} from '@chakra-ui/react';

interface IModalAddressProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddress({ isOpen, onClose }: IModalAddressProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Endereço" size="xl">
      <ModalBody>
        <SimpleGrid gap={4} columns={2}>
          <FieldInput label="Tipo de endereço" />
          <FieldInput label="CEP" />
          <FieldInput label="Logradouro" />
          <FieldInput label="Número" />
          <FieldInput label="Bairro" />
          <FieldInput label="Complemento" />
          <FieldInput label="Estado" isDisabled />
          <FieldInput label="Cidade" isDisabled />
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
