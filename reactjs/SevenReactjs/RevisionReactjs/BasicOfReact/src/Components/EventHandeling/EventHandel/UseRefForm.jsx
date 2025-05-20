import React ,{useEffect, useRef, useState} from 'react'

const UseRefForm = () => {
    const [fromData,setFormData] = useState({})
    const usernameInputRef = useRef()
    const userEmailInputeref = useRef()

    const HandelSumbit = (e) => {
        e.preventDefault()
        const fromData = {
            username: usernameInputRef.current.value,
            email:userEmailInputeref.current.value
        }
        setFormData(fromData)
    }

    console.log(fromData)

  return (
    <div>
      <form onSubmit={HandelSumbit}>
        <input  type="text" ref={usernameInputRef}  />
        <input type="email"  ref={userEmailInputeref} />
        <button type='submit'>sumbit</button>
      </form>

      <div>
        <h1>result</h1>
        <p>{fromData.username}</p>
      </div>
    </div>
  )
}

export default UseRefForm
