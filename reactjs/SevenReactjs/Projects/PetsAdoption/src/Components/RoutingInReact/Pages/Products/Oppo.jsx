import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Oppo = () => {

    const [products,setProducts] = useState([])

    const LongHairedCats =[
      { 
        id:16,
        name: "Maine Coon", 
        adoptionRate: "High", 
        price: "$800 - $2,500", 
        description: "Large, fluffy, and affectionate companions.", 
        image: "https://example.com/maine_coon.jpg" 
      },
      { 
        id:17,
        name: "Ragdoll", 
        adoptionRate: "Moderate", 
        price: "$800 - $3,000", 
        description: "Gentle and known for their floppy, relaxed nature.", 
        image: "https://example.com/ragdoll.jpg" 
      },
      { 
        id:18,
        name: "Persian", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $3,500", 
        description: "Elegant, calm, and needs regular grooming.", 
        image: "https://example.com/persian.jpg" 
      },
      { 
        id:19,
        name: "Norwegian Forest Cat", 
        adoptionRate: "Moderate", 
        price: "$600 - $1,500", 
        description: "Loves climbing and has a thick, waterproof coat.", 
        image: "https://example.com/norwegian_forest.jpg" 
      },
      { 
        id:20,
        name: "Himalayan", 
        adoptionRate: "Moderate", 
        price: "$800 - $2,500", 
        description: "Beautiful long fur with a Siamese-like face.", 
        image: "https://example.com/himalayan.jpg" 
      }
    ]
  
      

      useEffect(() => {
        const fatchProduct = async () => {
            try {
                await setProducts(LongHairedCats)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[])

    //   console.log(product)


  return (
    <div style={{backgroundColor:"#191919"}}>
         <h5 style={{color:"#F7F7F7" ,paddingTop:"10px" ,paddingLeft:"20px"}}>Long Haired Cats</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#F7F7F7" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img height={320} width={300} style={{borderRadius:"10px 10px 0px 0px", objectFit:"fill",marginLeft:"20px"}} src={product.image} alt="" />
                
                <p style={{color:"#111" ,fontSize:"1vw" , fontWeight:"500"}}>{product.name}</p>
           
                
            </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Oppo

