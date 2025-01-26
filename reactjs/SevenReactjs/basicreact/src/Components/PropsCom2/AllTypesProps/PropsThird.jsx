import React from 'react'

const PropsThird = () => {


    // thirdway propsing data
    let obj = {
        mouseName:"dell",
        keybord:"hp"
    }


  return (
    <div>
      <p>{obj.mouseName}</p>
      <p>{obj.keybord}</p>
    </div>
  )
}

export default PropsThird
