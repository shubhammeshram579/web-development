import React from 'react'
import {Link} from "react-router-dom"

const AuthHeader = () => {
  return (
 
      <div>
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
          <h1 className="text-2xl font-bold text-blue-600"> <Link
            to="/"
            className=" px-4 py-2 rounded"
          >
            MyApp
          </Link></h1>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        </header>
      </div>
  )
}

export default AuthHeader
