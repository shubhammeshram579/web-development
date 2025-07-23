import React from 'react'

const TodoList = ({data,deletebtn,editbtn}) => {

    console.log(data)
  return (
    <div>
    <div className='flex items-center justify-center mt-10 bg-slate-100'>
      <p className='text-black'>{data.todo}</p>
      <button className='bg-red-400 px-5 py-2' onClick={() => deletebtn(data.id)}>delete</button>
      <button className='bg-green-400 px-5 py-2' onClick={() => editbtn(data.id)}>edit</button>

      </div>
    </div>
  )
}

export default TodoList
