import React from 'react'

const ShowTimer = ({HandelPused,HandelResume,HandelReset,isPused,hour,minute,seconds}) => {
    // console.log(isPused)
  return (
    <div>
      <div  className="pb-10">
        <div className="flex items-center justify-center flex-row gap-3">
            <p className="bg-white  p-4 px-5 text-black">{hour < 10 ? `0${hour}` :hour}</p>:
            <p className="bg-white  p-4 px-5 text-black">{minute < 10 ? `0${minute}`: minute}</p>:
            <p className="bg-white  p-4 px-5 text-black">{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
        {!isPused && <button onClick={HandelPused} className="bg-red-300 p-3 px-10 mt-5 rounded-xl text-black">Pused</button>}
        {isPused && <button onClick={HandelResume} className="bg-red-300 p-3 px-10 mt-5 rounded-xl text-black">Resume</button>}
        <button onClick={HandelReset} className="bg-red-300 p-3 px-10 mt-5 rounded-xl text-black">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ShowTimer
