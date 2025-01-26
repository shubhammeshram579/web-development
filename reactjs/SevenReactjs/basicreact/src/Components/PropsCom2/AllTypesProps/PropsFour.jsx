import React from 'react'

const PropsFour = (props) => {
    // console.log(props.obj)
  return (
    <div>
      {props.obj ? (
        props.obj.map((i,index) => (
            <div key={index}>
                <p>{i.name}</p>
            </div>
          ))
      ) : (
        <h1>not found</h1>
      )}
    </div>
  )
}

export default PropsFour
