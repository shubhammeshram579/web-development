import React from 'react'
import Header from "./ConditionalCom/Header.jsx"
import SwiteConditional from "./SwiteStatment/SwiteConditional.jsx"

const ConditionRCom = () => {
  return (
    <div style={{backgroundColor:"yellow" ,width:"245px",padding:"50px 2px"}}>
      <Header isUser={true}/>

      <SwiteConditional food="apple"/>
    </div>
  )
}

export default ConditionRCom
