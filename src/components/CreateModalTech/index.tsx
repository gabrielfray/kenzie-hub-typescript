import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateModalSchema } from "../../validations";
import { TechProviderContext } from "../../context/TechContext";
import { AiOutlineClose } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import SelectEdit from "../SelectEdit";

import { ContentSelect } from "../../pages/Register/styles";
import {
  ButtonClose,
  ButtonRegister,
  ContentHeader,
  ContentInputLabel,
  ContentMain,
  ErrorMessage,
} from "./styles";

interface ITechData {
  title: string;
  status: string;
}

const CreateModalTech = () => {
  const { setRegisterModal, createTech } = useContext(TechProviderContext);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechData>({ resolver: yupResolver(formCreateModalSchema) });
  return (
    <ContentMain>
      <form onSubmit={handleSubmit(createTech)}>
        <ContentHeader>
          <h3>Cadastrar Tecnologia</h3>
          <ButtonClose onClick={() => setRegisterModal(false)}>
            <AiOutlineClose size={"1.3em"} style={{ cursor: "pointer" }} />
          </ButtonClose>
        </ContentHeader>
        <ContentInputLabel>
          <label>Nome da tecnologia</label>
          <input
            type="text"
            placeholder="Nome da tecnologia"
            {...register("title")}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </ContentInputLabel>
        <ContentSelect>
          <Controller
            defaultValue="Iniciante"
            control={control}
            name="status"
            render={({ field: { onChange } }) => (
              <SelectEdit onChange={(event) => onChange(event.value)} />
            )}
          />
        </ContentSelect>
        <ButtonRegister type="submit">Cadastrar Tecnologia</ButtonRegister>
      </form>
    </ContentMain>
  );
};

export default CreateModalTech;
