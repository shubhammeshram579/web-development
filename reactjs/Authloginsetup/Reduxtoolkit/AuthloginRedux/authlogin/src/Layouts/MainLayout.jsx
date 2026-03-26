import { Outlet, Link } from "react-router-dom";
import MainHeader from "../Components/Header/MainHeader";
import MainFooter from "../Components/Footer/MainFooter";

const MainLayout = () => {
  return (
    <>
      <MainHeader />

      <div className="min-h-screen bg-gray-50">
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      <MainFooter />
    </>
  );
};

export default MainLayout;
