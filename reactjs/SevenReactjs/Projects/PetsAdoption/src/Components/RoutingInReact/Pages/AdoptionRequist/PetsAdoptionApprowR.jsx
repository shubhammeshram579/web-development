import React from 'react'
import {useSelector} from "react-redux"
import {Link } from 'react-router-dom'

const PetsAdoptionApprowR = () => {
     const adoptionRequestdata = useSelector((state) => state.auth.adoptionRequest)
     const petShelter = useSelector((state) => state.auth.petShelter)


  return (
    <>
    <div style={{paddingTop:"5px",  display: "grid",
          gridTemplateColumns:"repeat(5,1fr)" ,gap:"20px"}}>
      {adoptionRequestdata.map((item,index) => (
      <div className="card" style={{width:"320px" ,overflow:"hidden" ,paddingBottom:"10px",border:"3px solid #1d899ab1" ,borderRadius:"20px"}}>
        <img height={250} width={320} style={{objectFit:"cover"}} src={item.product[0].image} alt="" />
        <h3 style={{color:"#111" ,textAlign:"center"}}>{item.product[0].name}</h3>
        <p style={{color:"#111",textAlign:"center"}}>Pet adoption request {item.status === true ? <p style={{color:"green"}}>Approve</p>: <p style={{color:"red"}}>Pendig</p>}</p>
        {petShelter.length > 0 ? ( petShelter.map((i,index) => (
          <div key={index}  style={{textAlign:"center"}}>
           {i.product[0].id === item.product[0].id ? (<button style={{border:"none",backgroundColor:"#CC7229", padding:"2px 10px",borderRadius:"10px"}}>Pet Adopted</button>):
           (<Link to={`/AdoptionPayment/${item.product[0].id}`}><button style={{border:"none",backgroundColor:"#CC7229", padding:"2px 10px" ,color:"#fff",borderRadius:"10px"}}>Payment procces</button></Link>)}
        </div>)
        )) :(
        <div key={index}  style={{textAlign:"center"}}>
          <Link to={`/AdoptionPayment/${item.product[0].id}`}><button style={{border:"none",backgroundColor:"#CC7229", padding:"2px 10px",color:"#fff" ,borderRadius:"10px"}}>Payment procces</button></Link>
       </div>)}
      </div>
      ))}
    </div>
    
    </>
  )
}

export default PetsAdoptionApprowR
