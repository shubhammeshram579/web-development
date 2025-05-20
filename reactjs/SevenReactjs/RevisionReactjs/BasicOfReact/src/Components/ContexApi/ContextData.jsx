import React ,{useContext} from 'react'
import axios from 'axios'
import CreateContext from './Context/CreateContext'

const ContextData = () => {

   const {apiData}  = useContext(CreateContext)

  return (
    <div className="flex items-center justify-center flex-wrap gap-5 p-20">
      {apiData.map((items,index) => (
        <div key={items.id} className='bg-gray-500/50 rounded-xl p-2'>
            <img className='h-30 w-40' src={items.images[0]} alt="" />
            <p className='text-center'>{items.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ContextData
