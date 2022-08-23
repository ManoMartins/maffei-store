import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import api from 'services';

import Button from 'components/UI/atoms/Button';
import Modal from 'components/UI/molecules/Modal';
import FieldInputRegister from 'components/UI/atoms/FormRHF/FieldInputRegister';
import FieldSelectRegister from 'components/UI/atoms/FormRHF/FieldSelectRegister';
import FieldMaskController from 'components/UI/atoms/FormRHF/FieldMaskController';

import {
  useToast,
  ModalBody,
  SimpleGrid,
  ButtonGroup,
  ModalFooter,
  Box,
} from '@chakra-ui/react';

import { IState } from 'types/IState';
import { ICity } from 'types/ICity';

import schema from './schema';

interface IFormAddress {
  street: string;
  streetType: string;
  number: string;
  complement?: string;
  neighborhood: string;
  cityId: string;
  stateId: string;
  zipCode: string;
}

interface IModalAddressProps {
  isOpen: boolean;
  reload: () => void;
  onClose: () => void;
  defaultValues?: IFormAddress & { id: string };
}

export default function ModalAddress({
  isOpen,
  reload,
  onClose,
  defaultValues,
}: IModalAddressProps) {
  const toast = useToast();
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormAddress>({
    resolver: yupResolver(schema),
  });

  const [selectState, setSelectState] = useState([]);
  const [selectCity, setSelectCity] = useState([]);

  useEffect(() => {
    if (!defaultValues) return;

    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    api.get<IState[]>('/state').then(response => {
      const options = response.data.map(state => ({
        value: state.id,
        label: state.initials,
      }));

      setSelectState(options);
    });
  }, []);

  useEffect(() => {
    api.get<ICity[]>('/city').then(response => {
      const options = response.data.map(state => ({
        value: state.id,
        label: state.name,
      }));

      setSelectCity(options);
    });
  }, []);

  const onSubmit: SubmitHandler<IFormAddress> = async data => {
    try {
      if (defaultValues) {
        await api.put(`/address/${defaultValues.id}`, {
          ...data,
          id: undefined,
        });
      } else {
        await api.post('/address', data);
      }

      toast({
        title: 'Endereço cadastrado com sucesso!',
        description: 'Seu endereço foi cadastrado com sucesso!',
        status: 'success',
      });

      reload();
      onClose();
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar endereço',
        description:
          'Ocorreu um erro ao cadastrar seu endereço, tente novamente.',
        status: 'error',
        duration: 60 * 60,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Endereço" size="xl">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <SimpleGrid gap={4} columns={2}>
            <FieldSelectRegister
              name="streetType"
              label="Tipo de endereço"
              register={register}
              error={errors.streetType}
              options={[
                { value: 'street', label: 'Rua' },
                { value: 'avenue', label: 'Avenida' },
                { value: 'alameda', label: 'Alameda' },
                { value: 'place', label: 'Lugar' },
                { value: 'district', label: 'Bairro' },
                { value: 'quarter', label: 'Quadra' },
              ]}
            />

            <FieldMaskController
              name="zipCode"
              label="CEP"
              control={control}
              error={errors.zipCode}
              mask="99999-999"
            />

            <FieldInputRegister
              name="street"
              label="Logradouro"
              register={register}
              error={errors.street}
            />

            <FieldInputRegister
              name="number"
              label="Número"
              register={register}
              error={errors.number}
            />

            <FieldInputRegister
              name="neighborhood"
              label="Bairro"
              register={register}
              error={errors.neighborhood}
            />

            <FieldInputRegister
              name="complement"
              label="Complemento"
              register={register}
              error={errors.complement}
            />

            <FieldSelectRegister
              name="stateId"
              label="Estado"
              register={register}
              error={errors.stateId}
              options={selectState}
            />

            <FieldSelectRegister
              name="cityId"
              label="Cidade"
              register={register}
              error={errors.cityId}
              options={selectCity}
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
