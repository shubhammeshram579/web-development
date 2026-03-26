import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiErrorHendel = () => {
  const [product ,setProduct] = useState([])
  const [loading ,setLoading] = useState(false)
 


  useEffect(() => {

    const fatchdata = async () => {

     try {
      setLoading(true)
       const res = await axios.get(`https://fakestoreapi.com/products`)
 
       setProduct(res.data)
      //  setProduct(null)


     } catch (error) {
      console.log("api error ",error.message)
       setLoading(false)
      
     }
    }

    fatchdata()

  },[])


  console.log(product)



  if(!loading){
    return <div>loading api</div>
  }

  return (
    <div className='min-h-screen px-5 py-5'>
      <div className='flex items-center justify-between flex-wrap gap-5'>
      {product?.map((item) => (
        <div key={item.id} className='bg-gray-300 px-3 py-2 rounded-lg'>
          <img src={item.image} alt="" className='h-32 w-32 object-cover' />
          <p>{item.category}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ApiErrorHendel
