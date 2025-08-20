import React from 'react'
import PropsDelaing from "./PropsDelaing"
/* const Props1 = (props) => {

    console.log(props)
  return (
    <div>
      <h1>this is props</h1>
      <p>{props.mouse}</p>
      <p>{props.secondProps.name}</p>
    </div>
  )
}

export default Props1 */



const Props1 = ({mouse,secondProps,data}) => {

    console.log("data",data)
    console.log(secondProps)
  return (
    <>
    <div>
      {data.map((item,index) => (
        <div key={index}>
            <p >{item.name}</p>
            <p >{item.age}</p>
        </div>
      ))}
    </div>
    <div>
        <PropsDelaing  mousedata={mouse}/>
    </div>
    </>
  )
}

export default Props1
