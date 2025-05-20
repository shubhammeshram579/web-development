import React from 'react'
import Link from 'next/link'
import {Spotlight} from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className='w-full h-auto md:h-[40rem] rounded-md  flex items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>
      <h1 className='text-8xl font-semibold text-gray-300'>Mater the arth of music</h1>
      <p className='px-48 text-2xl text-gray-400 mt-5 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam numquam dolorum exercitationem, sit saepe voluptates ea sint possimus laborum sunt cumque explicabo sed autem neque rem porro sequi mollitia quaerat totam ipsum iste? Tenetur repellat, tempore recusandae dignissimos nihil quae eius similique ratione enim sed modi optio quas, consequuntur dolore.</p>
      <Link href={"/courses"} >
    
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
         Exprole more
      </Button>
      </Link>
    </div>
    </div>
  )
}

export default HeroSection
