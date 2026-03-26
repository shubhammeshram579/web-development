import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Hero = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-center mt-32 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyApp 🚀</h2>
        <p className="text-gray-600 max-w-xl mb-6">
          A modern React app with authentication, protected routes, and clean
          architecture.
        </p>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded text-lg"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Hero;
