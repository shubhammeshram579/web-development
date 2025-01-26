import React from 'react'

const PropsSecond = (props) => {
    // console.log(props)
  return (
    <div>
      <p>fistname: {props.user.firstname}</p>
      <p>lastname: {props.user.lastname}</p>
    </div>
  )
}

export default PropsSecond
