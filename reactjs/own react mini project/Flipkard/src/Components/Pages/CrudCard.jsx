import React from 'react'
import { useSelector } from 'react-redux'
import {deleteCard,updatedCard} from ".//../ReducxToolKit/Authslice"
import { useDispatch } from 'react-redux'


const CrudCard = () => {
    const dispactch = useDispatch()
    const product = useSelector((state) => state.auth.cards)

    console.log("product",product)

    const handeldelete = (id) => {
        dispactch(deleteCard(id))
    }

    const upatedDetails = (item) => {
        // console.log(item)
        dispactch(updatedCard({id:item.id, title:"shubham",price:133.33}))

    }



  return (
    <div>
      <div className=" grid grid-cols-1 gap-5 pt-5 min-h-screen">
      {product.length > 0 ? (
        product.map((item) => (
          <div key={item.id} className="flex items-center justify-center flex-col gap-4">
            <img className="h-20 w-20" src={item.image} alt="" />
            <p>{item.category}</p>
            <p>{item.title}</p>
            <button onClick={() => upatedDetails(item)} className="bg-amber-500 px-2 py-1 rounded">updated</button>
            <button onClick={() => handeldelete(item.id)} className="bg-amber-500 px-2 py-1 rounded">delete</button>
          </div>
        ))
      ) : (
        <div className="text-center">Proruct not availble</div>
      )}
    </div>

    <div>
        <form action="">
            <input type="text" id='titel' name='title' />
        </form>
    </div>
    </div>
  )
}

export default CrudCard
