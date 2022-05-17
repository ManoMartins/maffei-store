import * as yup from 'yup';

const schema = yup.object().shape({
  documentNumber: yup
    .string()
    .required('Documento do titular é obrigatório')
    .transform(value => value.replace(/\D/g, '')),

  cardHolder: yup.string().required('Nome do titular é obrigatório'),

  cardNumber: yup
    .string()
    .required('Número do cartão é obrigatório')
    .transform(value => value.replace(/\D/g, '')),

  cardExpiry: yup.string().required('Data de expiração é obrigatório'),

  cardCvv: yup
    .string()
    .length(3, 'CVV deve ter 3 dígitos')
    .transform(value => value.replace(/\D/g, ''))
    .required('Código de segurança é obrigatório'),
});

export default schema;
