import React from 'react'

const PropsForthWay = (props) => {
  return (
    <div className="bg-gray-500 p-5 mt-5">
        <h1>forthWay</h1>
      <p>{props.mouse}</p>
      <p>{props.laptop}</p>
      <p>{props.proccers}</p>
    </div>
  )
}

export default PropsForthWay
