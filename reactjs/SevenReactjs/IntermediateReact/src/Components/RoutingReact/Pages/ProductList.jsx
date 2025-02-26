import React, { useState,useEffect} from 'react'
import axios from 'axios';

const ProductList = () => {
    const [product ,setProduct] = useState([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error || "somting fatch error"))

    },[])

    // console.log(product)





  return (
    <div>
        {/* card wise */}
      <div style={{display:"flex", alignItems:"center",justifyContent:"center", flexWrap:"wrap"}}>
        {product.map((items ,index) => (
            <div key={items.id} style={{display:"flex", alignItems:"center",justifyContent:"center", flexWrap:"wrap" ,flexDirection:"column"}}>
                <img height={200} width={300} src={items.image} alt={items.category} />
                <p>{items.category}</p>
                <p>{items.price}</p>
            </div>
        ))}
      </div>

      {/* table list  */}
      <div>
        <table>
            <tr >
                <th style={{border:"1px solid #111",padding:"10px"}}>sr no</th>
                <th style={{border:"1px solid #111"}}>category</th>
                <th style={{border:"1px solid #111"}}>description</th>
            </tr>
            {product.map((prod,index) => (
                <tbody key={index}>
                    <tr>
                        <td style={{border:"1px solid #111" ,textAlign:"center",padding:"10px"}}>{prod.id}</td>
                        <td style={{border:"1px solid #111", textAlign:"center",padding:"10px"}}>{prod.category}</td>
                        <td style={{border:"1px solid #111",textAlign:"start",padding:"10px"}}>{prod.description}</td>
                    </tr>
                </tbody>
            ))}
        </table>
      </div>
    </div>
  )
}

export default ProductList
