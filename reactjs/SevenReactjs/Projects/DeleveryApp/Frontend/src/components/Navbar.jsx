import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">TransportApp</Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            {/* <button className="bg-red-500 px-3 py-1 rounded">Logout</button> */}
          </>
        ) : ( 
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
         )}
      </div>
    </nav>
  );
}
