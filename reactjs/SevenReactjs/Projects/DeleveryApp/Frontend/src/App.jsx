import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookVehicle from "./pages/BookVehicle";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
