import { Outlet, Link } from "react-router-dom";
import AuthFooter from "../Components/Footer/AuthFooter"
import AuthHeader from "../Components/Header/AuthHeader"


const AuthLayout = () => {
  return (
    <>
     <AuthHeader />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <Outlet />
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
