import React from 'react'

import Counter from "./Couter/Counter.jsx"
import CountDown from "./CountDownTimer/CountDown.jsx"
import FAQuetion from "./FAQuetions/FAQuetion.jsx"
import EmiCalalator from "./EMICalculator/EmiCalalator.jsx"
import CustomModalOverlay from "./CustomModal/CustomModalOverlay.jsx"
import UndoableCounter from "./UndoableCounter/UndoableCounter.jsx"
import SearchItem from "./SearchSeggetion/SearchItem.jsx"


const AllComp = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <CountDown />
      <FAQuetion />
      <EmiCalalator />
      <CustomModalOverlay />
      <UndoableCounter /> */}
      <SearchItem />
    </div>
  )
}

export default AllComp
