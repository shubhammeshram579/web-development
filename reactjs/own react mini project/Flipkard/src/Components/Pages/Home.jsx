import React from 'react'
import Sliders from './Sliders'

const Home = () => {

    let productlist = [
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
        {
            image:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
            name:"product1"
        },
    ]
  return (
    <>
    <div className='flex items-center justify-center flex-row gap-10 mt-5'>
      {productlist.map((item,index) => (
        <div key={index} className='flex items-center justify-center flex-col gap-1'>
            <img src={item.image} alt="" />
            <h5>{item.name}</h5>
        </div>
      ))}
    </div>
    <div>
        <Sliders />
    </div>
    </>
    
  )
}

export default Home
