'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const page = () => {
  

  const dataArray = [
    {
      id:"1",
      image:"https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"2",
      image:"https://plus.unsplash.com/premium_photo-1677329952685-aecee218884a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"3",
      image:"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"4",
      image:"https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"5",
      image:"https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  return (
    <div className='flex items-center justify-center min-h-screen flex-col gap-3'>
     <Carousel plugins={[Autoplay({delay:2000})]} className="w-full max-w-3xl">
      <CarouselContent>
        {dataArray.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              
              <Card>
                <h1 className='text-center'>{item.id}</h1>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  
                  <img src={item.image} alt="" className='h-[60vh] w-full object-cover rounded-2xl' />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <footer className='mt-20'>
      <p>Well come to my next app</p>
    </footer>
    </div>
  )
}

export default page
