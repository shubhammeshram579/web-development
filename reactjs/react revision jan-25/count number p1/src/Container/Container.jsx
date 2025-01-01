import React from 'react'
import "../App.css"

function Container({children}) {
  return (
    <div className='flex items-center justify-center w-full h-full flex-col'>{children}</div>
  )
}

export default Container