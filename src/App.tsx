import Routes from "./routes";

import { ToastContainer } from "react-toastify";

import UserProvider from "./context/UserContext";

import TechProvider from "./context/TechContext";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <Routes></Routes>;
        <ToastContainer />
      </TechProvider>
    </UserProvider>
  );
}

export default App;
