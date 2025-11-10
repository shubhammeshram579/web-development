import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import AddCards from "./Components/Pages/AddCards"
import Products from "./Components/Pages/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsedContexProvide from "./Components/Contex/UsedContexProvide";
import EditProduct from "./Components/Pages/EditProduct";
import CrudCard from "./Components/Pages/CrudCard";

function App() {
  return (
    <>
      <div>
        <UsedContexProvide>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<AddCards />} />
            <Route path="/products" element={<Products />} />
            <Route path="/editProduct" element={<EditProduct />} />
            <Route path="/crudCard" element={<CrudCard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </UsedContexProvide>
      </div>
    </>
  );
}

export default App;
