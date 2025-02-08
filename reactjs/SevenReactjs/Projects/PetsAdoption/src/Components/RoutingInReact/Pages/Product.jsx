import React, { useState, useContext} from "react";
import SliderPage from "./HomePage/SliderPage.jsx";
import ProductList from "./ProductList/ProductList.jsx";

import UserContext from "../ContexApi/UsedContexApi.js";

// import SearchInput from "./SearchPets/SearchInput.jsx"
import "..//..//../App.css"


const Product = () => {
  const { products2 } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const [selectedPets, setSelectedPets] = useState("");

  const handelChange = (e) => {
    setSelectedPets(e.target.value);
  };


  const LargrBtn = async () => {
    const response = await products2.filter(
      (p) => p.size === "Large" && p.type === selectedPets
    );
    setProducts(response);
  };


  const SmallBtn = async () => {
    const response = await products2.filter(
      (p) => p.size === "Small" && p.type === selectedPets
    );
    setProducts(response);
  };


  const MediumBtn = async () => {
    const response = await products2.filter(
      (p) => p.size === "Medium" && p.type === "Cat" && p.type === selectedPets
    );
    setProducts(response);
  };


  const AdultBtn = async () => {
    const response = await products2.filter(
      (p) => p.age === "Adult" && p.type === selectedPets
    );
    setProducts(response);
  };


  const PuppyBtn = async () => {
    const response = await products2.filter(
      (p) => p.age === "Puppy" && p.type === selectedPets
    );
    setProducts(response);
  };


  const PriceLowBtn = async () => {
    const response = await products2.filter(
      (p) => p.price <= 2500 && p.type === selectedPets
    );
    setProducts(response);
  };

  
  const PriceHighBtn = async () => {
    const response = await products2.filter(
      (p) => p.price >=  2500 && p.type === selectedPets
    );
    setProducts(response);
  };

  const handelClearFilter = () => {
    setSelectedPets("")
    setProducts([])
  }

  return (
    <div>
      <SliderPage />
      {/* <SearchInput /> */}
      <div
        style={{
          display: "flex",alignItems: "start",justifyContent: "space-between",
        }}
      >
        <div
          className="card1" style={{ width: "20%", height: "100vh", position: "sticky", top: "0", zIndex: "99", padding: "110px 50px", color: "#fff",
          }}
        >
          <h1>
            Filters
            <span style={{marginLeft:"100px" ,fontSize:"1.3vw"}}><button onClick={handelClearFilter} style={{backgroundColor:"transparent" ,border:"none"}}><i id="FilterClear" className="fa-solid fa-filter-circle-xmark"></i></button></span>
          </h1>
          
          {/* <p>Select Type</p> */}

          <label htmlFor="pets" className="text-info font-weight-normal">Pet Category</label>
          <br />
          <select style={{width:"50%",borderRadius:"5px"}} id="pets" value={selectedPets} onChange={handelChange}>
            <option value="">Select pets</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>

          <ul style={{listStyleType:"none" ,paddingTop:"40px"}}>
            <p className="text-info font-weight-normal">Select Size</p>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}} onClick={LargrBtn}>Large</button>
            </li>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px",border:"none"}}  onClick={SmallBtn}>Small</button>
            </li>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}}  onClick={MediumBtn}>Medium</button>
            </li>
          </ul>

        <ul style={{listStyleType:"none",paddingTop:"50px"}}>
            <p className="text-info font-weight-normal">Select Age</p>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}} onClick={AdultBtn}>Adult</button></li>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}} onClick={PuppyBtn}>Puppy</button></li>
          </ul>
        <ul style={{listStyleType:"none",paddingTop:"50px"}}>
            <p className="text-info font-weight-normal">Select Price</p>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}} onClick={PriceLowBtn}>price low to high</button></li>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none"}} onClick={PriceHighBtn}>price high to low</button></li>
          </ul>
        
        </div>
       
        <div className="card2" style={{ width: "80%" }}>
          <ProductList productList={products} data={products2} />
        </div>
      </div>
    </div>
  );
};

export default Product;
