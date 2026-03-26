import React,{memo} from 'react'

const Memohookchild = () => {

    console.log("child comp")
  return (
    <div>
      memohookchild
    </div>
  )
}

export default memo(Memohookchild)
