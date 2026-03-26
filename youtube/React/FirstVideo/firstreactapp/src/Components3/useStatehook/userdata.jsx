import React from 'react'

const Userdata = ({user}) => {

    console.log("user",user)
  return (
    <div className='bg-gray-300 border p-5 mb-5 '>
      <p>name: {user?.name}</p>
      <p>age: {user?.age}</p>
      <p>address: {user?.address}</p>
    </div>
  )
}

export default Userdata
