/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IProps {
  children: ReactNode;
}

interface IRegisterData {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IUserContext {
  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitLogin: (data: ILoginData) => void;

  logout: () => void;
}

const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const onSubmitRegister = (data: IRegisterData) => {
    api
      .post("/users", data)
      .then(() => {
        navigate("/");
        toast.success("Perfil criado com sucesso!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onSubmitLogin = (data: ILoginData) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@KenzieHub:token", res.data.token);
        localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data.user));

        navigate("/dashboard");

        toast.success("Logado com sucesso!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login e senha incorreto!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        logout,
        onSubmitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
