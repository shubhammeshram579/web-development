import React, { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from "..//../ContexApi/UsedContexApi.js"

const Motorola = () => {

  const {products2} = useContext(UserContext)

    const [products,setProducts] = useState([])

    /*
    const SmallDogs = [
      { 
        id:31,
        name: "French Bulldog", 
        adoptionRate: "High", 
        price: "$1,500 - $3,000", 
        description: "Affectionate and great for apartment living.", 
        image: "https://example.com/french_bulldog.jpg" 
      },
      { 
        id:32,
        name: "Pomeranian", 
        adoptionRate: "High", 
        price: "$500 - $2,000", 
        description: "Fluffy, playful, and highly energetic.", 
        image: "https://example.com/pomeranian.jpg" 
      },
      { 
        id:33,
        name: "Dachshund", 
        adoptionRate: "Moderate", 
        price: "$400 - $1,500", 
        description: "Loyal and brave, known for their long body.", 
        image: "https://example.com/dachshund.jpg" 
      },
      { 
        id:34,
        name: "Chihuahua", 
        adoptionRate: "High", 
        price: "$300 - $1,200", 
        description: "Tiny, confident, and very loyal to their owners.", 
        image: "https://example.com/chihuahua.jpg" 
      },
      { 
        id:35,
        name: "Shih Tzu", 
        adoptionRate: "Moderate", 
        price: "$500 - $2,500", 
        description: "Friendly and loving lap dogs with long coats.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1E-2rXzg1T5q1aD-Yfa_qdx1TEaENSRVK0p6savGYdUOAUETEw4gv9GVkoHFPF5wWOA&usqp=CAU" 
      }
    ]
      */
      

    useEffect(() => {
        const fatchProduct = async () => {
            try {
                // await setProducts(SmallDogs)

                const response = await products2.filter((p) => (p.id >= 31 && p.id <= 35 ))
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
        <h5 style={{color:"#F7F7F7" ,paddingTop:"10px" ,paddingLeft:"20px"}}>Small Dogs</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#323030" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img  height={320} width={300} style={{borderRadius:"10px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
         
                <p style={{color:"#fff" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
              
                
            </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Motorola

