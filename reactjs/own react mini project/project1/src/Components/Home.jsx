import React from 'react'

function Home() {
  return (
    <div className="page1 min-h-screen w-full bg-zinc-800 text-white flex items-center justify-between">
        <div className="card flex items-start justify-center flex-col">
            <h1 className='text-[8vw] font-extrabold'>Good</h1>
            <h1 className='text-[8vw] font-extrabold mt-[-40px]'>Things</h1>
        </div>
        <div className="card2 text-justify mt-[-200px] ml-[150px] pr-10">
            <h1>We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.</h1>
        </div>
    </div>
  )
}

export default Home