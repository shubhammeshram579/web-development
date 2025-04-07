import React, { useEffect, useState } from 'react'
import FAQItem from "./FAQItem.jsx"

const FAQuetion = () => {
    

    let ArrayList = [
        {
            id:1,
            quetion:"What is an FAQ page?",
            ans:"An FAQ (Frequently Asked Questions) page is a key part of a knowledge1 "
        },
        {
            id:2,
            quetion:"How to create an FAQ page?",
            ans:"An FAQ (Frequently Asked Questions) page is a key part of a knowledge2 "
        },
        {
            id:3,
            quetion:"Optimize your FAQ page for SEO?",
            ans:"An FAQ (Frequently Asked Questions) page is a key part of a knowledge3 "
        },
    ]



  return (
    <div className='bg-slate-700 mt-5'>
      <h1 className='text-2xl'>Frequently asked questions</h1>
      <div className='pt-10'>

        {ArrayList.map((item,index) => (
            <FAQItem  faq={item} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default FAQuetion
