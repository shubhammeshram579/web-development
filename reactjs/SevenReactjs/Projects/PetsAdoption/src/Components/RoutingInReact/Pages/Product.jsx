import React, { useState,useContext } from 'react'
import Motorola from "./Products/Motorola.jsx"
import Apple from "./Products/Apple.jsx"
import Sumsung from "./Products/Sumsung.jsx"
import Oppo from "./Products/Oppo.jsx"
import Vivo from "./Products/Vivo.jsx"
import SliderPage from "./HomePage/SliderPage.jsx"
import ProductList from "./ProductList/ProductList.jsx"

import UserContext from "../ContexApi/UsedContexApi.js"

const Product = () => {

  const {products2} = useContext(UserContext)
  const [products ,setProducts] = useState([])

  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handelChange = (e) => {
    setSelectedAnimal(e.target.value)
  }

  // console.log(selectedAnimal)





  const LargrBtn = async () => {
    const response = await products2.filter((p) => (p.size === "Large" && p.type === selectedAnimal))
    setProducts(response)
  }

  const SmallBtn = async () => {
    const response = await products2.filter((p) => (p.size === "Small" && p.type === selectedAnimal))
    setProducts(response)
  }
  const MediumBtn = async () => {
    const response = await products2.filter((p) => (p.size === "Medium" && p.type === "Cat"  && p.type === selectedAnimal))
    setProducts(response)
  }

  
  return (
    <div>
      <SliderPage />
      <div style={{display:"flex" ,alignItems:"start" ,justifyContent:"space-between"}}>
      <div className="card1" style={{width:"20%" ,height:"100vh" ,position:"sticky" ,top:"0", zIndex:"99"  ,padding:"50px",color:"#fff"}}>
        <h3> <i class="fa-solid fa-arrow-down-wide-short" style={{fontSize:"1vw"}}></i> Filters</h3>
        <h5>PICK A CATEGORY</h5>

        <label htmlFor="pets">Select Pets</label>
        <select 
        id="pets"
        value={selectedAnimal}
        onChange={handelChange}

        >
          <option value="">Select type</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        </select>


        <ul>
          <li><button onClick={LargrBtn}>Large</button></li>
          <li><button onClick={SmallBtn}>Small</button></li>
          <li><button onClick={MediumBtn}>Medium</button></li>
        </ul>

        {/* <label style={{paddingTop:"20px"}} htmlFor="#"> price: 
        <input type="range" />
        </label> */}
      </div>
      <div className="card2" style={{width:"80%"}}>
      
      {/* <Motorola />
      <Apple />
      <Sumsung />
      <Oppo />
      <Vivo /> */}
      <ProductList productList={products}  data={products2}/>
      </div>
      </div>
    </div>
  )
}

export default Product
