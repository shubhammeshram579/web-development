import React from 'react'

const Message = ({msg}) => {
    return(
        <div>
            {msg}
        </div>
    )
};


const SwiteConditional = (props) => {

  switch(props.food){
    case "banana":
        return <Message msg="i am heath fruits" />
        break
    case "apple":
        return <Message msg="i am apple fruits" />
        break
    default:
        return <Message msg="not found" />
  }
  
}

export default SwiteConditional;
