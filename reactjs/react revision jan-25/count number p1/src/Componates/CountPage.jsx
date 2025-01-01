import React ,{useState} from 'react'

function CountPage() {
    let [count , setCount] = useState(0);

    const addnum = () => {
        if(count < 20){
            count = count + 1
            setCount(count)
            console.log(count);
        }

    }

    const deletenum = () => {
        if(count > 0){
            count = count - 1
            setCount(count)
            console.log(count);
        }

    }

  return (
    <div className='flex items-center justify-center flex-col gap-7 h-[90vh]'>
        <h1 className='text-white'>counter: {count}</h1>
        <div className="card flex items-center justify-center flex-col gap-4">
        <button className='bg-green-500 rounded-lg px-5 py-2' onClick={addnum}>add num</button>
        <button className='bg-red-500 rounded-lg px-3 py-2' onClick={deletenum}>delete num</button>
        </div>
    </div>
  )
}

export default CountPage