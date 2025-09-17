import React, { useState } from 'react'

const TransferList = () => {
    const array = [
        {
            id:1,
            title:"first",
            checked:false
        },
        {
            id:2,
            title:"second",
            checked:false
        },
        {
            id:3,
            title:"third",
            checked:false
        },
        {
            id:4,
            title:"forth",
            checked:false
        }
    ]


    const [left,setLeft] = useState(array)
    const [right,setRight] = useState([])
    const [selectItem,setSelectitem] = useState([])
    const [selectedItemIds, setSelectedItemIds] = useState([]);

    const [color,setColor] = useState("")


    const hanselSelcte = (item) => {

        setSelectitem((values) => ([...values,item]))
    }

    const handleLef = () => {
        setRight(selectItem)

    }
    




    // console.log(selectItem)
    
  return (
    <div>
      <h1>tranfer list</h1>
      <div className='flex items-center justify-center gap-4'>
        <div className='bg-gray-700 w-20 px-5  h-44 py-5'>
            {left.map((item) => (
                <div key={item?.id}>
                    <p onClick={() => hanselSelcte(item)} className={` mb-2 ${color === "red" ? "bg-red-700": "bg-blue-700"}`}>{item?.item}</p>
                </div>
            ))}
        </div>
        <div className=' flex items-center justify-center gap-3'>
            <button onClick={handleLef} className='bg-blue-500 px-2 py-1 rounded'>Left</button>
            <button className='bg-blue-200 text-black px-2 py-1 rounded'>Right</button>
        </div>

        <div className='bg-gray-700 w-20 h-44 px-4 py-5'>
             {right.map((item) => (
                <div key={item?.id}>
                    <p className='bg-blue-700 mb-2'>{item?.item}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TransferList
