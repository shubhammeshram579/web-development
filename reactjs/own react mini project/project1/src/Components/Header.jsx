import React from 'react'

function Header() {
  return (
    <div>
        <header className='h-20 bg-zinc-800 w-full p-5'>
            <nav className='flex items-center justify-between'>
                <div>
                    <h1 className='text-yellow-300 font-semibold text-lg'>Logo</h1>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <a className='text-yellow-300 font-semibold text-lg' href="#">Home</a>
                    <a className='text-yellow-300 font-semibold text-lg' href="#">Services</a>
                    <a className='text-yellow-300 font-semibold text-lg' href="#">Projects</a>
                    <a className='text-yellow-300 font-semibold text-lg' href="#">Contact</a>
                </div>
            </nav>

        </header>
    </div>
  )
}

export default Header