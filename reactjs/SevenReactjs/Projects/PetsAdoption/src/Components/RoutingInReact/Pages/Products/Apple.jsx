import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Apple = () => {

    const [products,setProducts] = useState([])

    const LargeDogs = [
      { 
        id:26,
        name: "Labrador Retriever", 
        adoptionRate: "High", 
        price: "$500 - $2,000", 
        description: "Friendly, intelligent, and great with families.", 
        image: "https://example.com/labrador.jpg" 
      },
      { 
        id:27,
        name: "Golden Retriever", 
        adoptionRate: "High", 
        price: "$700 - $2,500", 
        description: "Loyal, affectionate, and easy to train.", 
        image: "https://example.com/golden_retriever.jpg" 
      },
      { 

        id:28,
        name: "German Shepherd", 
        adoptionRate: "High", 
        price: "$500 - $2,000", 
        description: "Intelligent, protective, and great for training.", 
        image: "https://example.com/german_shepherd.jpg" 
      },
      { 
        id:29,
        name: "Rottweiler", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $3,000", 
        description: "Strong, loyal, and protective guard dogs.", 
        image: "https://example.com/rottweiler.jpg" 
      },
      { 
        id:30,
        name: "Siberian Husky", 
        adoptionRate: "Moderate", 
        price: "$600 - $2,000", 
        description: "Energetic, intelligent, and needs cold weather.", 
        image: "https://example.com/siberian_husky.jpg" 
      }
    ]
  
      

      useEffect(() => {
        const fatchProduct = async () => {
            try {
                await setProducts(LargeDogs)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[])

    //   console.log(product)


  return (
    <div style={{backgroundColor:"#191919"}}>
         <h5 style={{color:"#F7F7F7" ,paddingTop:"10px" ,paddingLeft:"20px"}}>Large Dogs</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#F7F7F7" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img height={320} width={300} style={{borderRadius:"10px 10px 0px 0px", objectFit:"contain",marginLeft:"20px"}} src={product.image} alt="" />
                <p style={{color:"#111" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
           
                
            </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Apple

