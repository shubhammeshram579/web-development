import React from 'react'
import MoutingUseEffectHooks from "./LifeCycleMethodUseEffect/MoutingUseEffectHooks.jsx"
import UpdateUseEffectHook from "./LifeCycleMethodUseEffect/UpdateUseEffectHook.jsx"
import UnmoutingUseEffectHook from "./LifeCycleMethodUseEffect/UnmoutingUseEffectHook.jsx"

const UseEffectHooksUsed = () => {
  return (
    <div>
      <MoutingUseEffectHooks />
      <UpdateUseEffectHook />
      <UnmoutingUseEffectHook />
    </div>
  )
}

export default UseEffectHooksUsed
