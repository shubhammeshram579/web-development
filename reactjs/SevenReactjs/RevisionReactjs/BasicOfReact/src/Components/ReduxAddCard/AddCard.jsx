import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {addcard,removeCard} from "..//../ReduxToolkit/AuthSlic"

const AddCard = () => {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.auth.cards)
  const [formInpute ,setFormInpute] = useState({});
  const [data ,setData] = useState([]);


  const handelChange = (e) => {
    const {name,value} = e.target
    setFormInpute((values) => ({...values, [name]:value}))
  }

  const handelSumbit = (e) => {
    e.preventDefault()
    const formdata = {id:Math.random(),formItems: formInpute}
    setData(formdata)
    dispatch(addcard(formdata))

  }

  const handelDelete = (id) => {
    dispatch(removeCard(id))
  }

  // console.log("cards",cards)


  return (
    <>
    <div className='flex items-center justify-center gap-8 flex-col min-h-[50vh]'>
      <h1 className='text-gray-200'>add cord</h1>
      <form onSubmit={handelSumbit} className='flex items-center justify-center flex-col bg-slate-700 p-10'>
        <label htmlFor="firstName">first name</label>
        <input type="text" id='firstName' name='firstName'  value={data.firstname} onChange={handelChange}/>
         <label htmlFor="lastName">Last name</label>
        <input type="text" id='lastName' name='lastName' value={data.lastName} onChange={handelChange}/>
        <button type='submit'>submit</button>
      </form>
    
    <div className='flex items-center justify-center flex-col bg-slate-700 p-10'>
      <h1>Result</h1>
      {cards.map((item,i) => (
        <div key={item.id} className=' flex items-center justify-center flex-col'>
          <p className='text-black bg-slate-200 mt-5 p-2'>{item?.formItems?.firstName}</p>
          <p className='text-black bg-slate-200 '>{item?.formItems?.lastName}</p>
          <button onClick={() => handelDelete(item.id)}>delte</button>
      </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default AddCard
