import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return <h1 className="text-2xl font-bold">Welcome, {user.name} 🎉</h1>;
};

export default Home;
