import React, { useEffect, useState } from 'react'

//3. unmouting componate meaes clean rending memmory then used like null setBook(null) or setBook("")
const UnmoutingUseEffectHook = () => {

    useEffect(() => {
        console.log("mouting componeted")

        return () => {
            console.log("unmouting componeted")
        }

    } ,[])

  return (
    <div>
      <h1>books</h1>
    </div>
  )
}

export default UnmoutingUseEffectHook
