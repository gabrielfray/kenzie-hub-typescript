import { FaEllipsisH } from "react-icons/fa";
import Lottie from "react-lottie";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import noTechs from "../../assets/noTechs.json";

import { UserContext } from "../../context/UserContext";
import { TechProviderContext } from "../../context/TechContext";

import CreateModalTech from "../../components/CreateModalTech";
import {
  ContentMain,
  Header,
  ButtonLogout,
  ContentUser,
  ContentTechs,
  Content,
  ContentNavTech,
  ButtonOpen,
  ContentImage,
} from "./styles";
import EditTechModal from "../../components/EditTechModal";
import api from "../../services/api";

interface ITechData {
  id: string;
  title: string;
  status: string;
}

const Dashboard = () => {
  const { logout } = useContext(UserContext);

  const {
    registerModal,
    setRegisterModal,
    editModal,
    setEditModal,
    setTechs,
    techs,
    setValues,
  } = useContext(TechProviderContext);

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user") || "{}");

  const token = localStorage.getItem("@KenzieHub:token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    api
      .get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs(res.data.techs))
      .catch((err) => console.log(err));
  }, [registerModal, editModal, token, setTechs]);

  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: noTechs,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContentMain>
      {registerModal && <CreateModalTech />}
      {editModal && <EditTechModal />}
      <Header>
        <div>
          <h1>Kenzie Hub</h1>
          <ButtonLogout onClick={() => logout()}>Sair</ButtonLogout>
        </div>
      </Header>
      <main>
        <ContentUser>
          <div>
            <h3>Olá, {userData?.name}</h3>
            <span>{userData?.course_module}</span>
          </div>
        </ContentUser>
        <Content>
          <ContentNavTech>
            <h2>Tecnologias</h2>
            <ButtonOpen onClick={() => setRegisterModal(true)}>+</ButtonOpen>
          </ContentNavTech>
          <ContentTechs>
            {techs.toString() !== "" ? (
              <ul>
                {techs?.map((elem: ITechData) => (
                  <li key={elem.id}>
                    <span>{elem.title}</span>
                    <p>
                      {elem.status}
                      <FaEllipsisH
                        id={elem.id}
                        size={"1.3em"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditModal(true);
                          setValues({
                            title: elem.title,
                            status: elem.status,
                            id: elem.id,
                          });
                        }}
                      />
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <ContentImage>
                <Lottie
                  options={defaultOptions}
                  isStopped={animateState.isStopped}
                  isPaused={animateState.isPaused}
                />
              </ContentImage>
            )}
          </ContentTechs>
        </Content>
      </main>
    </ContentMain>
  );
};

export default Dashboard;
