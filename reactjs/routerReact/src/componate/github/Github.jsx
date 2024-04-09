import React, { useEffect, useState } from 'react'

// import hook useLoaderData for fatch git api data
import { useLoaderData } from 'react-router-dom'

function Github() {
  // store data
    const data = useLoaderData()





    // const [data ,setData] = useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/shubhammeshram579')
    //   .then(res => res.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data)
    //   })
    // },[])



    
  return (

    // fatch data for git api
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


// github api call for check followers and profile img
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shubhammeshram579')
    return response.json()
}