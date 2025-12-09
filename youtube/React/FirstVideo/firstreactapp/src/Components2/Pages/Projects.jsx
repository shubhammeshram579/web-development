import React, {useEffect,useState} from "react";
import axios from "axios";

const Projects = () => {
  const [product ,setProduct] = useState([])


  useEffect(() => {

    const fatchData = async () => {
      try {

       const respose =  await axios.get("https://fakestoreapi.com/products");

      //  console.log(respose);

       setProduct(respose.data)
        
      } catch (error) {
        console.log("somting api error", error)
      }

    }

    fatchData()

  },[])
 

  console.log("product",product)


  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-800">
      <div className="flex items-center justify-center gap-4  flex-wrap">
        {product.length > 0 ? 
        product.map((item) => (
          <div key={item.id} className="bg-slate-100 px-2 py-2 rounded-lg">
            <img src={item.image} alt="" className="h-44 w-52 rounded-xl object-cover" />
            <p className="text-center font-semibold">{item.category}</p>
          </div> 
        ))
        :  <div> proict is not found</div> }
      </div>
    </div>
  );
};

export default Projects;
