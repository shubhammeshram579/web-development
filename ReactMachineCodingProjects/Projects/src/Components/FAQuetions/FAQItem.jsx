import React,{useState,useEffect} from 'react'

const FAQItem = ({faq,index}) => {
    const [isSowing,setIsSowing] =  useState(false);

    
    useEffect(() => {
        if(index == 0){
            setIsSowing(true)
        }
    },[])


    // toggle btn
    const HandelClick = () => {
        setIsSowing((isSowing) => !isSowing)
     }

  return (
    <div>
      <div className='flex items-center  justify-center gap-3 bg-slate-500 p-5 m-5'>
        <button onClick={HandelClick}>{isSowing ? (<i class="fa-solid fa-arrow-down"></i>) : (<i class="fa-solid fa-arrow-right"></i>)}</button>
        <p>{faq.quetion}</p>
      </div>
      {isSowing &&<p className='p-5'>{faq.ans}</p>}
    </div>
  )
}

export default FAQItem
