import React from 'react'
import Counter from "./Componets/Couters.jsx"
import BgColorChange from "./Componets/BgColorChange.jsx"
import InputeChange from "./Componets/InputeChange.jsx"


// form headling 
// basic form
import FormHead1 from "./Componets/FormHendling/FormHead1.jsx"
// json form like object
import FormHead2 from "./Componets/FormHendling/FormHead2.jsx"
// array form hendling 
import FormHend3 from "./Componets/FormHendling/FormHend3.jsx"
// multiple array value form hendling
import FormHend4 from "./Componets/FormHendling/FormHend4.jsx"

const EventHandling = () => {
  return (
    <div>
      <Counter />
      <BgColorChange />
      <InputeChange />
      <FormHead1 />
      <FormHead2 />
      <FormHend3 />
      <FormHend4 />
    </div>
  )
}

export default EventHandling
