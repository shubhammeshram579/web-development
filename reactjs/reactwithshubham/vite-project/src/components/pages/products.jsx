import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [formData,setFormData] = useState({})
  const [product,setProduct] = useState([])
  const [isShowform , setIsShowform] = useState(false)


  console.log(product)


  const handelchange = (e) => {
    const {name, value} = e.target;
    setFormData((values) => ({...values,[name]:value}))
  }


// frontend side test 
  // const handelSumbit = (e) => {
  //   e.preventDefault()

  //   const product = {id: Math.random(),formData}

  //   setProduct((prev) => ([...prev,product]))

  //   setFormData({productname:"",brands:"", price:""})

  // }

  const handelSumbit = async (e) => {
    e.preventDefault()
    try {

      const playload = {
        productname:formData.productname,
        price:formData.price,
        brands:formData.brands
      }
      const resposne = await axios.post(`http://localhost:3000/api/products`,playload)

      console.log(resposne.data)

      setFormData({productname:"",brands:"", price:""})

    } catch (error) {
      console.log(error)
      
    }

  }


  const handelForm = () => {
    setIsShowform((prev) => !prev)
  }



  // get products 

  useEffect(() => {
    const fatchPrdocut = async () => {
      const res = await axios.get(`http://localhost:3000/api/products`)

      if(res){
        setProduct(res.data.data.prouctlist)
      }

    }

    fatchPrdocut()
  },[])






  return (
    <div>
      <div className='flex items-center justify-between'>
          <div>Products</div>
        <button className='bg-yellow-500 rounded-lg px-5 py-2'  onClick={handelForm}>create</button>
      </div>

      {isShowform && 
      <div>
        <form onSubmit={handelSumbit}>
          <input type="text" id='productname' name='productname' value={formData.productname} onChange={handelchange} placeholder='enter product name' />
          <input type="text" id='brands' name='brands' value={formData.brands} onChange={handelchange} placeholder='enter product brands' />
          <input type="text" id='price' name='price' value={formData.price} onChange={handelchange} placeholder='enter product price' />

        <button type='submit'>sumbit</button>
        </form>
      </div>
      }

      <div className='grid grid-cols-5 gap-5 pt-10 '>
        {product?.map((item) => (
          <div key={item._id} className=' bg-gray-200 p-5 flex items-start flex-col rounded-lg'>
           
            <img src="https://images.pexels.com/photos/17220082/pexels-photo-17220082.jpeg" alt="" className='h-32 w-full object-cover' />
            <div className='text-start mt-3'>
            <p>name: {item.productname}</p>
            <p>barand: {item.brands}</p>
            <p>price: {item.price}</p>
            </div>
            <div className='w-full flex  items-center justify-around gap-5 mt-5'>
              <button className='bg-yellow-400 px-2 py-2 rounded-lg'>update</button>
              <button className='bg-red-400 px-2 py-2 rounded-lg'>delete</button>
            </div>
    
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Products
