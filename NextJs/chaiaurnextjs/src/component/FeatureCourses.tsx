"use client";
import React from 'react'
import Link from 'next/link'
import CoursesData from "../data/music_courses.json"
import { Condiment } from 'next/font/google'
import { div } from 'motion/react-client'
import {BackgroundGradient} from "./ui/background-gradient"


interface Courses {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeatureCourses = () => {

    const FeatureData = CoursesData.courses.filter((course:Courses) => course.isFeatured)
    

  return (
    <div className='flex items-center justify-center flex-col gap-5'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-2xl text-green-500'>Feature courses</h1>
        <p className='text-4xl'>Learn with the best</p>
      </div>
      <div className='mt-10 mb-10'>
        <div className='grid grid-flow-col-1 sm:grid-flow-col-2 lg:grid-cols-3 gap-8 justify-center'>
        {FeatureData.map((item:Courses) => (
            <div key={item.id} className='flex items-center justify-center gap-2' >
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <p className='text-2xl'>{item.title}</p>
                    <p className='mb-5'>{item.description}</p>
                    <Link href={`/couses/${item.slug}`} className='bg-gray-600 text-white py-2 px-5 rounded-xl'>Learn more</Link>

                </BackgroundGradient>
            </div>
        ))}
        </div>
      </div>
      <div>
        <Link href={"/courses"} className='bg-gray-600 py-3 px-5 rounded-xl'>View All courses</Link>
      </div>
    </div>
  )
}

export default FeatureCourses
