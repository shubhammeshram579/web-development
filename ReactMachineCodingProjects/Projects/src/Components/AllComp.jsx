import React from 'react'
import CountDown from "./CountDownTimer/CountDown.jsx"
import FAQuetion from "./FAQuetions/FAQuetion.jsx"
import EmiCalalator from "./EMICalculator/EmiCalalator.jsx"
import CustomModalOverlay from "./CustomModal/CustomModalOverlay.jsx"

const AllComp = () => {
  return (
    <div>
      <CountDown />
      <FAQuetion />
      <EmiCalalator />
      <CustomModalOverlay /> 
    </div>
  )
}

export default AllComp
