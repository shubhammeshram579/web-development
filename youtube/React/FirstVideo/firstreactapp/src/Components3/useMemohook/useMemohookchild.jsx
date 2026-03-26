import React ,{memo} from 'react'

const UseMemohookchild = ({handelIncrse}) => {

    console.log("child cop")
  return (
    <div>
      <button onClick={handelIncrse} className='bg-yellow-400 px-5 py-2 rounded-lg'>increse</button>
    </div>
  )
}

export default memo(UseMemohookchild)
