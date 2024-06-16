import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages";
// import HomePage from "../pages/homepage";
import TimelineScreen from "../pages/timeline";
import AboutUs from "../components/aboutUs";
import HomePage from "../pages/homepage";

const RouterManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
export default RouterManagement;
