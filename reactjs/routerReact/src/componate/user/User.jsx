import React from 'react'

// useParams it is hook for difind user like dynamic user /
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-800 py-6 text-white'>User: {userid}</div>
  )
}

export default User