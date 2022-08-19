import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo obrigatória!")
    .min(6, "A senha deve contem no mínimo 6 dígitos"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas não correspondem"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Campo obrigatório"),
});

export const formCreateModalSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
});
