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
  const [sidShow,setSidShow] = useState(false)

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

  const handelsidebar = () =>{
    setSidShow((prev) => !prev)
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
        {sidShow &&<div
          className="card1" style={{backgroundColor:"#dddd", width: "25%", height: "100vh", position: "sticky", top: "0", zIndex: "99", padding: "20px 20px", color: "#fff",
          }}
        >
          <h1 style={{color:"#111" ,display:"flex",alignItems:"center", paddingBottom:"50px"}}>
            Filters
            <span style={{marginLeft:"100px" ,fontSize:"1.3vw"}}><button onClick={handelClearFilter} style={{backgroundColor:"transparent" ,border:"none"}}><i id="FilterClear" className="fa-solid fa-filter-circle-xmark"></i></button></span>
          </h1>
          
          {/* <p>Select Type</p> */}

          <label htmlFor="pets" style={{color:"#CC7229",fontWeight:"500"}} >Pet Category</label>
          <br />
          <select style={{width:"50%",borderRadius:"5px"}} id="pets" value={selectedPets} onChange={handelChange}>
            <option value="">Select pets</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>

          <ul style={{listStyleType:"none" ,paddingTop:"40px"}}>
            <p style={{color:"#CC7229",fontWeight:"500"}}>Select Size</p>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}} onClick={LargrBtn}>Large</button>
            </li>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px",border:"none",backgroundColor:"#fff"}}  onClick={SmallBtn}>Small</button>
            </li>
            <li>
              <button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}}  onClick={MediumBtn}>Medium</button>
            </li>
          </ul>

        <ul style={{listStyleType:"none",paddingTop:"50px"}}>
            <p  style={{color:"#CC7229",fontWeight:"500"}}>Select Age</p>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}} onClick={AdultBtn}>Adult</button></li>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}} onClick={PuppyBtn}>Puppy</button></li>
          </ul>
        <ul style={{listStyleType:"none",paddingTop:"50px"}}>
            <p style={{color:"#CC7229",fontWeight:"500"}}>Select Price</p>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}} onClick={PriceLowBtn}>price low to high</button></li>
            <li><button style={{borderRadius:"5px",marginBottom:"5px" ,border:"none",backgroundColor:"#fff"}} onClick={PriceHighBtn}>price high to low</button></li>
          </ul>
        
        </div>}
       
        <div className="card2" style={{ width: "100%",padding:"20px" }}>
          <button onClick={handelsidebar} style={{borderRadius:"10px",border:"3px solid #1d899ab1"}}>Filter<i class="fa-solid fa-filter"></i></button>
          <ProductList productList={products} data={products2} />
        </div>
      </div>
    </div>
  );
};

export default Product;
