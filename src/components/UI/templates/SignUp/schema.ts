import formatRemoveSpecialCaracters from 'helpers/format/removeSpecialCar';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),

  email: yup.string().email().required('Email é obrigatório'),

  phoneNumberType: yup.string().required('Tipo de telefone é obrigatório'),

  phoneNumber: yup
    .string()
    .required('Telefone é obrigatório')
    .transform(formatRemoveSpecialCaracters),

  documentNumber: yup
    .string()
    .required('CPF é obrigatório')
    .transform(formatRemoveSpecialCaracters),

  gender: yup.string().required('Gênero é obrigatório'),

  birthDate: yup.date().required('Data de nascimento é obrigatório'),

  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem')
    .required('Confirmação de senha é obrigatória'),
});

export default schema;
