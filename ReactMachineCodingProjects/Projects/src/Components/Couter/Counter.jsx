import { useEffect, useState } from "react";

const Counter = () => {
    // const [count ,setCount] = useState(0)
    const [Inte ,setInte] = useState(null)
    const [id ,setId] = useState(null)
    const [data,setData] = useState([])


    const addbtn = () => {
        setData((values) => ([...values,{id: Math.random(), count:0}]))

    }

    const Deletebtn = (id) => {
        setData((prev) => prev.filter((i) => i.id !== id))

    }

   


    const playbtn = (id) => {
        // setInte(true) 
       data.filter((itam) => {
        if(itam.id === id)
            setInte(true) 

       })
       
    }

    const stopbtn = (id) => {
        data.filter((itam) => {
            if(itam.id === id)
                setInte(false) 
    
           })
        
    }

   



    useEffect(() => {
       if(Inte === true){
        let iD = setInterval(() => {
            // setCount(count + 1)
            setData((prev) => prev?.forEach((ite) => ite.count += 1))
            // data.forEach((item) => {
            //     item.count += 1
            // })

        },1000)
        setId(iD)

    }else if(Inte === false){
        let iD = setInterval(() => {
            // if(count === 0){
            //     return 0
            // }
            // setCount(count - 1)
            data?.forEach((item) => {
                item.count -= 1
            })

        },1000)
        setId(iD)
    }

    // unmound
    return () => {
        if(Inte === true){
        clearInterval(id)
    }else if(Inte === false){
        clearInterval(id)

    }}

    },[data,Inte])

    console.log(data)



  

   
    
    return (
        <>
        <div>
            <button onClick={addbtn}>AddCard</button>
        </div>
        {data?.map((item,index) => (
            <div key={item.id} className="bg-gray-700">
            <p className="pt-5 pb-6">Count: {item.count}</p>
            <div className="flex items-center justify-center gap-4 pb-5">
                <button onClick={() => playbtn(item.id)}  className="bg-green-500 p-2 rounded-xl">play</button>
                <button onClick={() => stopbtn(item.id)} className="bg-green-700 p-2 rounded-xl ">push</button>
                <button onClick={() => Deletebtn(item.id)} className="bg-red-500 p-2 rounded-xl ">Delete</button>
            </div>
        </div>
        ))}
        
        </>
    )
}

export default Counter;