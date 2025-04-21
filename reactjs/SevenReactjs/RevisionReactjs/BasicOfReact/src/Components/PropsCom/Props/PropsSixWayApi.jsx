import React from 'react'

const PropsSixWayApi = ({data}) => {
    console.log(data)
  return (
    <div className='flex items-center justify-center bg-gray-500 p-5 mt-5'>
      <p>Six way Api data props parant compnated to chind compo</p>
      <p>{data.availabilityStatus}</p>
      <img width={300} height={300} className='object-cover' src={data.images?.[0]} alt="" />
      {data.reviews?.map((item,index) => (
        <div key={index}>
            <p>{item.reviewerName}</p>
            <p>{item.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default PropsSixWayApi
