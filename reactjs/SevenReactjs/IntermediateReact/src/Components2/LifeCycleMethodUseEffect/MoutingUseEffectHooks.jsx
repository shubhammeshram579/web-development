import React, { useEffect } from 'react'

// notes: 
// remove [] then rending useEffect again again }) like loops
// used [] then run used effect one time run 
// used [count] also continely run  rending useefeect conponates
// set the control then used like create butten then click the my useEffect run and rendring


const MoutingUseEffectHooks = () => {

    useEffect(() => {
        console.log("mouting componated ")
    },[])
    
  return (
    <div>
      mouting componated
    </div>
  )
}

export default MoutingUseEffectHooks;
