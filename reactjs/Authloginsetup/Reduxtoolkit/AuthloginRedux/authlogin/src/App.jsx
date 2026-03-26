import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../src/Layouts/AuthLayout";
import MainLayout from "../src/Layouts/MainLayout";
import Hero from "./Pages/Hero";
import Login from "../src/Components/AuthUser/Login";
import Register from "../src/Components/AuthUser/Register";
import Home from "../src/Pages/Home";
import ProtectedRoute from "../src/Routes/ProtectedRoute";
import Products from "../src/Pages/Products"
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Hero Page */}
        {/* <Route  path="/" element={<Hero />}/> */}

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route  path="/" element={<Hero />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
