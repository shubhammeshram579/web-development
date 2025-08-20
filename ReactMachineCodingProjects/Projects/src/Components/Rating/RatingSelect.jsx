import React, { useState } from 'react'

const RatingSelect = () => {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)


    let RatingList = [1,2,3,4,5]
  return (
    <div>
      RatingSelect

      <div className='flex items-center justify-center flex-row gap-4'>
        {RatingList.map((item,index) => (
            <div key={index} className='flex items-center justify-center flex-row'>
                <button onClick={() => setRating(item)} onMouseOver={() => setHover(item)} onMouseLeave={() => setHover(rating)} className={`Start text-3xl ${item <= ((rating && hover)|| hover) ? "on" : "off"}`}>*</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RatingSelect
