import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages";
// import HomePage from "../pages/homepage";
import TimelineScreen from "../pages/timeline";

const RouterManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<TimelineScreen />}></Route>
      </Route>
    </Routes>
  );
};
export default RouterManagement;
