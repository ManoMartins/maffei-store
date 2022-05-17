import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import api from 'services';

import Button from 'components/UI/atoms/Button';
import Modal from 'components/UI/molecules/Modal';
import FieldInputRegister from 'components/UI/atoms/FormRHF/FieldInputRegister';
import FieldMaskController from 'components/UI/atoms/FormRHF/FieldMaskController';

import {
  Box,
  useToast,
  ModalBody,
  SimpleGrid,
  ButtonGroup,
  ModalFooter,
} from '@chakra-ui/react';

import { ICreditCard } from 'types/ICreditCard';

import schema from './schema';

interface IFormCreditCard {
  cardCvv: string;
  cardNumber: string;
  cardHolder: string;
  cardExpiry: string;
  documentNumber: string;
}
interface IModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  defaultValues?: ICreditCard;
}

export default function ModalCard({
  isOpen,
  onClose,
  defaultValues,
}: IModalCardProps) {
  const toast = useToast();

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormCreditCard>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!defaultValues) return;

    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit: SubmitHandler<IFormCreditCard> = async data => {
    try {
      if (defaultValues) {
        await api.put(`/credit-card/${defaultValues.id}`, {
          ...data,
          id: undefined,
        });
      } else {
        await api.post('/credit-card', data);
      }

      toast({
        title: 'Sucesso',
        description: 'Cartão cadastrado com sucesso',
        status: 'success',
      });
    } catch (error) {
      console.error(error);

      alert('Erro ao cadastrar cartão de crédito');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cartão" size="xl">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <SimpleGrid gap={4} columns={2}>
            <FieldMaskController
              name="documentNumber"
              label="CPF do titular"
              control={control}
              error={errors.documentNumber}
              mask="999.999.999-99"
            />

            <FieldMaskController
              name="cardNumber"
              label="Número do cartão"
              control={control}
              error={errors.cardNumber}
              mask="9999 9999 9999 9999"
            />

            <FieldInputRegister
              name="cardHolder"
              label="Nome do cartão"
              register={register}
              error={errors.cardHolder}
            />

            <FieldMaskController
              name="cardExpiry"
              label="Validade"
              control={control}
              error={errors.cardExpiry}
              mask="99/99"
            />
            <FieldInputRegister
              name="cardCvv"
              label="CVV"
              register={register}
              error={errors.cardCvv}
              maxLength={3}
            />
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

            <Button type="submit" isLoading={isSubmitting}>
              Salvar
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Box>
    </Modal>
  );
}
