import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LazyLoading = () => {
  const [product ,setProduct] = useState({})
 

  useEffect(() => {

    const fatchdata = async () => {

     try {
       const res = await axios.get(`https://fakestoreapi.com/products/1`)
       setProduct(res.data)

     } catch (error) {
      console.log("api error ",error.message)
      
     }
    }

    fatchdata()

  },[])


  console.log(product)

  return (
    <div className='min-h-screen px-5 py-5'>
      <div className='flex items-center justify-center'>
        <div className=' px-3 py-2 rounded-lg flex items-center justify-center flex-col'>
          <img src={product.image}  loading="lazy" alt="" className='h-52 w-52 object-cover' />
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}

export default LazyLoading
