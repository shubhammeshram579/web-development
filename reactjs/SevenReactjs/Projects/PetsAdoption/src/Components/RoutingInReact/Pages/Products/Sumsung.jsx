import React, { useState,useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from "..//../ContexApi/UsedContexApi.js"

const Sumsung = () => {

  const {products2} = useContext(UserContext);


    const [products,setProducts] = useState([])

    /*
    const ShortHairedCats =[
      { 
        id:21,
        name: "Domestic Shorthair", 
        adoptionRate: "High", 
        price: "$50 - $200", 
        description: "Friendly and commonly found in shelters.", 
        image: "https://example.com/domestic_shorthair.jpg" 
      },
      { 
        id:22,
        name: "Siamese", 
        adoptionRate: "High", 
        price: "$400 - $1,500", 
        description: "Vocal and affectionate with striking blue eyes.", 
        image: "https://example.com/siamese.jpg" 
      },
      { 
        id:23,
        name: "Bengal", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $4,000", 
        description: "Active, intelligent, and leopard-like appearance.", 
        image: "https://example.com/bengal.jpg" 
      },
      { 
        id:24,
        name: "British Shorthair", 
        adoptionRate: "Moderate", 
        price: "$1,200 - $2,500", 
        description: "Calm, affectionate, and known for their round face.", 
        image: "https://example.com/british_shorthair.jpg" 
      },
      { 
        id:25,
        name: "Abyssinian", 
        adoptionRate: "Moderate", 
        price: "$500 - $1,500", 
        description: "Highly active and loves climbing and exploring.", 
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8nFGvDCWObaRih54cwNOzJikHlaJdPELNsIyB1dF_H_XM4ex3wkFEb5b0oQrScxwFoURbPSlS0SaZRagRm_MNbg" 
      }
    ]
      */
      

      useEffect(() => {
        const fatchProduct = async () => {
            try {
              // await setProducts(ShortHairedCats)
              const response = await products2.filter((p) => (p.id >= 21 && p.id <= 25))
            
                setProducts(response)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[products2])

    //   console.log(product)


  return (
    <div style={{backgroundColor:"#191919"}}>
         <h5 style={{color:"#F7F7F7" ,paddingTop:"10px" ,paddingLeft:"20px"}}>Short Haired Cats</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#323030" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img height={320} width={300} style={{borderRadius:"10px 10px 0px 0px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
                <p style={{color:"#fff" ,fontSize:"1vw" , fontWeight:"500",textAlign:"center"}}>{product.name}</p>
                
            </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Sumsung
