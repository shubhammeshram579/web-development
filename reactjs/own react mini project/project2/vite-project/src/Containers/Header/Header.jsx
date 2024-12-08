import React from 'react'

function Header() {
  return (
    <div>
        <nav className='flex items-center justify-between bg-black text-yellow-500 font-semibold text-xl h-20 px-32'>
            <h1 className='text-3xl'>logo</h1>
            <div className="card">
                <ol className='flex items-center justify-between gap-10'>
                    <li className='capitalize hover:text-white'>home</li>
                    <li className='capitalize hover:text-white'>about</li>
                    <li className='capitalize hover:text-white'>Web project</li>
                    <li className='capitalize hover:text-white'>ML project</li>
                    <li className='capitalize hover:text-white'>contact</li>
                </ol>
            </div>
        </nav>
    </div>
  )
}

export default Header