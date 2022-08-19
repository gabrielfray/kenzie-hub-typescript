import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ContentNotFound from "./components/ContentNotFound";
import Register from "./pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<ContentNotFound />} />
    </Routes>
  );
};
export default RoutesMain;
