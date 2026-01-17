import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {deletecard} from "..//../ReduxToolkit/Authslice.js"
const Addcard = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => (state.auth.card))

  console.log("product addcard",product)


  const handeldelete = (id) => {
    dispatch(deletecard(id))

  }
  return (
    <div className="flex items-center justify-center flex-col mt-5">
    {/* <h1 className="text-white">projects</h1> */}

    <div className="grid grid-cols-5 gap-5">
      {product.length > 0 ?
      
      product.map((p,i) => (
        <div key={p.id} className="bg-white flex items-center justify-center flex-col rounded-xl py-2 px-5">
          <img src={p.image} alt="" className="h-32 w-42" />
          <p>name: {p.category}</p>
          <p>price: {p.price}</p>
          <button onClick={() => handeldelete(p.id)} className="bg-yellow-300 py-2 px-4 rounded-lg mt-2">deletecard</button>
        </div>

      ))
       
      : 
      <div>data not found</div> }

    </div>
    </div>
  )
}

export default Addcard
