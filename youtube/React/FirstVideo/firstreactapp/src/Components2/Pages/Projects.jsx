import React, {useEffect,useState} from "react";
import axios from "axios";

const Projects = () => {
  const [product,setProduct] = useState([])

  useEffect(() => {

  const fatchData = async () => {
    try {
      
      const res = await axios.get(`https://fakestoreapi.com/products`)

      console.log("data",res.data)
      setProduct(res.data)
    } catch (error) {
      console.log("api error",error)
      
    }
  }

  fatchData()
  },[])





  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-800 pt-10">
    {/* <h1 className="text-white">projects</h1> */}

    <div className="grid grid-cols-5 gap-5">
      {product.length > 0 ?
      
      product.map((p,i) => (
        <div key={p.id} className="bg-white flex items-center justify-center flex-col rounded-xl py-2 px-5">
          <img src={p.image} alt="" className="h-32 w-42" />
          <p>name: {p.category}</p>
          <p>price: {p.price}</p>
        </div>

      ))
       
      : 
      <div>data not found</div> }

    </div>
    </div>
  );
};

export default Projects;
