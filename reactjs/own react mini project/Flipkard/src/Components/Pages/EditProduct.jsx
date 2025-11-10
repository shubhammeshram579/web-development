import React, { useState } from 'react'

const EditProduct = () => {

    const array = [
        {
            id:1,
            category:"new product",
            price:134.44
        },
        {   
            id:2,
            category:"new product2",
            price:133.44
        },
        {   
            id:3,
            category:"new product3",
            price:135.44
        },
    ]


    const [filter ,setFiler] = useState(array);
    const [formData, setFormData] = useState({});



    const handelEdit = (id) => {
        filter.filter((prev) => {
            if(prev.id === id){
                setFormData(prev)
            }
        })

    }


    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



    const handleUpdate = (e) => {
    e.preventDefault();
    setFiler((prev) => prev.filter((item) => {
        if(item.id === formData.id){
            let updatCat = item.category = formData.category
            let updatprice = item.price = formData.price
            return updatCat && updatprice
        }
        return item
    })); 
 
  };



  return (
    <>
    <div>
      {filter.map((item) => (
        <div key={item.id}>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button onClick={() => handelEdit(item.id)}>edit</button>
        </div>
      ))}
    </div>

    <div>
        <form onSubmit={handleUpdate}>
            <input type="text" id="category" name='category' value={formData.category} onChange={handleChange} />
            <input type="text" id="price" name='price' value={formData.price} onChange={handleChange} />
            <button type='submit'>sumbit</button>
        </form>
    </div>
    </>
  )
}

export default EditProduct
