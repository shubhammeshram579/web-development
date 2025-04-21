import React from 'react'

const Propsfirstway = (props) => {
  return (
    <div className='bg-gray-700 mt-5 p-5'>
    <h1 className='text-xl'>First way Props</h1>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Propsfirstway
