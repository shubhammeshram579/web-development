import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Vivo = () => {

    const [products,setProducts] = useState([])

    const HypoallergenicBreeds = [
      { 
        id:11,
        name: "Poodle (Dog)", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $3,000", 
        description: "Smart and hypoallergenic with curly coats.", 
        image: "https://example.com/poodle.jpg" 
      },
      { 
        id:12,
        name: "Portuguese Water Dog (Dog)", 
        adoptionRate: "Moderate", 
        price: "$2,000 - $4,000", 
        description: "Energetic and great for active families.", 
        image: "https://example.com/portuguese_water_dog.jpg" 
      },
      { 
        id:13,
        name: "Devon Rex (Cat)", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $2,500", 
        description: "Playful and intelligent with a curly coat.", 
        image: "https://example.com/devon_rex.jpg" 
      },
      { 
        id:14,
        name: "Sphynx (Cat)", 
        adoptionRate: "Moderate", 
        price: "$1,500 - $3,500", 
        description: "Hairless and affectionate, requires skin care.", 
        image: "https://example.com/sphynx.jpg" 
      },
      { 
        id:15,
        name: "Balinese (Cat)", 
        adoptionRate: "Moderate", 
        price: "$600 - $2,000", 
        description: "Elegant and hypoallergenic with long fur.", 
        image: "https://example.com/balinese.jpg" 
      }
    ];
      

      useEffect(() => {
        const fatchProduct = async () => {
            try {
                await setProducts(HypoallergenicBreeds)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[])

    //   console.log(product)


  return (
    <div style={{backgroundColor:"#191919"}}>
       <h5 style={{color:"#F7F7F7" ,paddingTop:"10px" ,paddingLeft:"20px"}}>Hypoallergenic Breeds</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map((product,index) => (
            <Link  style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#F7F7F7" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img height={320} width={300} style={{borderRadius:"10px 10px 0px 0px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
      
                <p style={{color:"#111" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
               
               
                
            </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Vivo

