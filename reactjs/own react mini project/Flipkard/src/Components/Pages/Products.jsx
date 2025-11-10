import React,{useContext, useEffect, useState} from 'react'
import useContex from '../Contex/UserCreatContex.js'

const Products = () => {
    const {product} = useContext(useContex)
    const [search ,setSearch] = useState("")
    const [filterdata,setFilterData] = useState([])
    const [editproduct ,setEditProduct] = useState({})
    const [editPage,setEditPage]  = useState(true)
    const [editPage2,setEditPage2]  = useState(false)

    const [editingId, setEditingId] = useState(null);
 

    const handelSearch =  async () => {
      const regex = new RegExp(search, 'i'); 
      const filter = await product.filter((item) => {
        const category = regex.test(item.category)
        return category
      })

      if(filter.length > 0){
         setFilterData(filter)
      }else{
        setFilterData(product)
      }
      
    }

    useEffect(() => {
      handelSearch()
    },[product])


    const handelDelete = (id) => {
      setFilterData((prev) => prev.filter((item) => item.id != id))
    }


    const handelEdit = (items) => {
      setEditProduct(items)
      setEditingId(items.id);
      setEditPage2(true)
      setEditPage(false)

    }

    const handelEditClose = () => {
      setEditPage2(false)
      setEditPage(true)
    }



    const handelChange = (e) => {
      const {name,value} = e.target
      setEditProduct((values) => ({...values, [name]:value}))
    }

    const handelSumbit = (e) => {
      e.preventDefunat()

      setFilterData((prev) => prev.filter((item) => {
        if(item.id === editproduct.id){
          let updatedCat = item.category = editproduct.category
          let updatedPrice = item.price = editproduct.price
          return updatedCat && updatedPrice
        }
        return item
      }))


      // setFilterData((prev) =>
      // prev.map((p) => (p.id === editingId ? { ...editproduct, id: editingId } : p))
      // );
        setEditingId(null);
      
    }
  
  return (
    <>
    <div className='mt-5 '>
      <input className='border border-black py-1' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search product'/>
      <button className='bg-blue-700 text-white px-1 py-1 rounded-e' onClick={handelSearch}>search</button>
    </div>
     {editPage &&
      <div className=" grid grid-cols-6 gap-5 pt-5 min-h-screen">
      {filterdata.length > 0 ? (
        filterdata.map((item) => (
          <div key={item.id} className="flex items-center justify-center flex-col gap-4 bg-gray-200 w-40 rounded-lg">
            <img className="h-20 w-20" src={item.image} alt="" />
            <p>{item.category}</p>
            <div className='flex items-center justify-between gap-3'>
            <button onClick={() => handelEdit(item)} className='bg-green-500 px-2 py-1 rounded'>Edit</button>
            <button onClick={() => handelDelete(item.id)} className='bg-red-400 px-2 py-1 rounded'>delete</button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Proruct not availble</div>
      )}
    </div>
     }

    {editPage2 && <div className='min-h-screen flex items-center justify-center'>
      
      <form onSubmit={handelSumbit} className='bg-gray-300 w-[30%] rounded flex items-center justify-center flex-col gap-3 py-3'>
      <div className='flex items-start flex-col '>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='category' value={editproduct.category} onChange={handelChange}/>
      </div>
      <div className='flex items-start flex-col '>
        <label htmlFor="#price">Price</label>
         <input type="text" id='price' name='price' value={editproduct.price} onChange={handelChange}/>
      </div>
      <div className='flex items-center justify-between gap-3'>
      <button type='submit' className='bg-blue-400 px-2 py-1 rounded'>sumbit</button>
      <button onClick={handelEditClose} className='bg-red-500 px-2 py-1 rounded'>close</button>
      </div>
      </form>
    </div>}
    </>
  )
}

export default Products
