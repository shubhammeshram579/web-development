import React from 'react'

const InputeTimer = ({HandelChange,HandelStart}) => {
  return (
    <div>
      <div className="h-[20vh] flex items-center justify-center flex-col gap-3">
        <div className="flex items-center justify-center flex-row gap-3">
          <input  className="text-center border-0 w-14 h-14 text-black" type="text" id="hour" onChange={HandelChange} placeholder="HH"/>:
          <input  className="text-center border-0 w-14 h-14 text-black" type="text" id="minute" onChange={HandelChange}  placeholder="MM"/>:
          <input className="text-center border-0 w-14 h-14 text-black" type="text" id="seconds" onChange={HandelChange} placeholder="SS"/>
        </div>
        <button className="bg-red-300 p-3 px-10 mt-5 rounded-xl text-black" onClick={HandelStart}>Start</button>
      </div>
    </div>
  )
}

export default InputeTimer
