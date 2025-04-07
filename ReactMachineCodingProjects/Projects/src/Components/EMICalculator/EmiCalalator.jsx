import React, { useEffect, useState } from 'react'

const EmiCalalator = () => {
    const [amount ,setAount] = useState("")
    const [intrest ,setIntrest] = useState("")
    const [year ,setYear] = useState("")
    const [Emi , setEmi] = useState("")


    useEffect(() => {
        if(amount && intrest && year){
        let r = intrest / 12 / 100;
        let calpow = Math.pow(1 + r ,year * 12 )
        let CaAmount = amount * ((r * calpow ) / (calpow -1));
        setEmi(Math.round(CaAmount))
    }})
  return (
    <div className='bg-gray-700 p-20'>
      <div>
        <h1>Emi Calalator</h1>
        <div className='flex items-center justify-center gap-4'>
            <div>
            <label htmlFor="Amount">Pinciple</label>
            <input type="text" name='Amount' id='Amount' onChange={(e) => setAount(e.target.value)} placeholder='enter amount' required className='text-black' />
            </div>
            <div>
            <label htmlFor="intrest">Intrest</label>
            <input type="text" name='intrest' id='intrest' onChange={(e) => setIntrest(e.target.value)} placeholder='enter intrest' required  className='text-black'/>
            </div>
            <div>
            <label htmlFor="year">year</label>
            <input type="text" name='year' id='year' onChange={(e) => setYear(e.target.value)} placeholder='enter amount' required  className='text-black'/>
            </div>
        </div>
        <div className='pt-10'>
                <p>result: {Emi}</p>
            </div>
      </div>
    </div>
  )
}

export default EmiCalalator
