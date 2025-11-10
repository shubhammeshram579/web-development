import React from 'react'
import Carousel from '../ui/carousel';

const Sliders = () => {

    const slides = [
    {
      image: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/eee9bebbcf13c4ac.jpg?q=60",
      caption: "Explore the beauty of nature",
    },
    {
      image: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/484fbfd5e987d69c.jpeg?q=60",
      caption: "Urban adventures await",
    },
    {
      image: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/be6cd4b49d0c13f6.jpeg?q=60",
      caption: "Innovation in every pixel",
    },
  ];
  return (
    
      <div className=" w-full flex flex-col items-center justify-center bg-background text-foreground p-6">
      {/* <h1 className="text-2xl font-semibold mb-6">Shadcn + Embla Carousel</h1> */}
      <Carousel slides={slides} />
    </div>
    
  )
}

export default Sliders
