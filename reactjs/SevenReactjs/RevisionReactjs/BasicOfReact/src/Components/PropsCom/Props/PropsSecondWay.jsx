import React from 'react'

const PropsSecondWay = (props) => {
  return (
    <div className='bg-gray-500 p-5 mt-5'>
      <h1>Second way</h1>
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
    </div>
  )
}

export default PropsSecondWay
