import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validations";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import background from "../../assets/background.json";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentImage,
  ContentInputLabel,
  ContentMain,
  ErrorMessage,
  LinkStyled,
} from "./styles";

interface IUserLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(formLoginSchema) });

  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: background,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContentMain>
      <h2>Kenzie Hub</h2>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <h3>Login</h3>
        <ContentInputLabel>
          <label>Email</label>
          <input type="text" placeholder="Email" {...register("email")} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </ContentInputLabel>
        <ContentInputLabel>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </ContentInputLabel>
        <button>Entrar</button>
        <span>Ainda não possui uma conta?</span>
        <LinkStyled to="/register">Cadastre-se</LinkStyled>
      </form>
      <ContentImage>
        <Lottie
          options={defaultOptions}
          isStopped={animateState.isStopped}
          isPaused={animateState.isPaused}
        />
      </ContentImage>
    </ContentMain>
  );
};

export default Login;
