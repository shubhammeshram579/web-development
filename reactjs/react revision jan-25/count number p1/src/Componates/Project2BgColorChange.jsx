import React ,{useState} from 'react'

function Project2BgColorChange() {
    const [color , setColor] = useState("#111");
  return (

    <div className='min-h-[100vh] w-full flex items-center justify-center flex-col gap-6' style={{backgroundColor:color}}>
        <h1 className='text-white'>backgroundColor changer</h1>

        <div className="card h-20 w-[30%] bg-slate-400 flex items-center justify-center gap-10 rounded">
            <button className='py-5 px-10 rounded-xl text-black bg-red-500' onClick={() => setColor("red")} style={{backgroundColor:"red"}}>red</button>
            <button className='py-5 px-10 rounded-xl text-black bg-green-400' onClick={() => setColor("green")} style={{backgroundColor:"green"}}>green</button>
            <button className='py-5 px-10 rounded-xl text-black bg-yellow-400'onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>yellow</button>
        </div>

    </div>
  )
}

export default Project2BgColorChange