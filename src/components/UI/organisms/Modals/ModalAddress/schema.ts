import * as yup from 'yup';

const schema = yup.object().shape({
  streetType: yup.string().required('Tipo de endereço é obrigatório'),

  street: yup.string().required('Rua é obrigatório'),

  number: yup.string().required('Número é obrigatório'),

  neighborhood: yup.string().required('Bairro é obrigatório'),

  cityId: yup.string().required('Cidade é obrigatório'),

  stateId: yup.string().required('Estado é obrigatório'),

  zipCode: yup.string().required('CEP é obrigatório'),

  complement: yup.string().optional(),
});

export default schema;
