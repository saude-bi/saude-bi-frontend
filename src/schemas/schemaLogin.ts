import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  username: yup.string().required('o nome de usuário é obrigatorio'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('a senha do usuário é obrigatorio'),
});
