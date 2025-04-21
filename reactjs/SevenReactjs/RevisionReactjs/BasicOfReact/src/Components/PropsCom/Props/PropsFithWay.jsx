import React from 'react'

const PropsFithWay = (props) => {
    // console.log(props)
  return (
    <div className='bg-gray-700 p-5 mt-5'>
      <p>{props.data.laptop}</p>
      <p>{props.data.mouse}</p>
      <p>{props.data.proccers}</p>
      <p>{props.num}</p>
    </div>
  )
}

export default PropsFithWay
