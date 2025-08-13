import React, { useState ,useRef} from 'react'

const OtpInput = () => {
    const [otp, setOpt] = useState("")
    const [data,setData] = useState({})

    const inRef = useRef(null)
    const inRef2 = useRef(null)
    const inRef3 = useRef(null)
    const inRef4 = useRef(null)


const handelChange = (e) => {
    const {name,value} = e.target;
    setOpt((values) => ({...values, [name]:value}))
}

const handelSubmit = (e) => {
    e.preventDefault()
    setData(otp)
    setOpt({name1:"",name2:"",name3:"",name4:""})

}






// console.log("ptp",otp)
// console.log("data",data)
console.log("inRef",inRef.current?.class)

    const arrayList = ["","","",""]
  return (
    <div className='bg-gray-700 mx-auto h-52 w-60 flex items-center justify-center flex-col gap-9'>
      OtpInput
      {/* <div className=' flex items-center justify-center gap-5 flex-row'>
        {arrayList.map((item,index) => (
            <div key={index} className='bg-gray-700'>
                <input type="text" name="name" id="name" value={otp} onChange={handelChange}  className='bg-gray-300 w-7 focus:ring-red-500 text-black text-center'/>
            </div>
        ))}
        
      </div> */}
      <form onSubmit={handelSubmit}>
      <div className='flex gap-5'>
      <input ref={inRef} type="text" name="name" id="name" value={otp.name} onChange={handelChange}  className='bg-gray-300 w-7 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black text-center'/>
      <input ref={inRef2} type="text" name="name2" id="name" value={otp.name2} onChange={handelChange}  className='bg-gray-300 w-7 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black text-center'/>
      <input ref={inRef3} type="text" name="name3" id="name" value={otp.name3} onChange={handelChange}  className='bg-gray-300 w-7 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black text-center'/>
      <input ref={inRef4} type="text" name="name4" id="name" value={otp.name4} onChange={handelChange}  className='bg-gray-300 w-7 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black text-center'/>
      </div>
        <button type='submit' className='bg-blue-600 px-5 py-2 rounded-xl mt-5'>submit</button>
        </form>
    </div>
  )
}

export default OtpInput
