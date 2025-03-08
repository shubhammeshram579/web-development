import React from 'react'
import {useSelector} from "react-redux"

const PetsAdoptionApprowR = () => {
     const adoptionRequestdata = useSelector((state) => state.auth.adoptionRequest)

     console.log(adoptionRequestdata)
  return (
    <div style={{minHeight:"100vh" ,padding:"150px 50px", display:"flex" ,alignItems:"center",justifyContent:"space-evenly", gap:"20px" ,flexWrap:"wrap"}}>
        {adoptionRequestdata.map((item,index) => (
      <div className="card" style={{width:"340px" ,borderRadius:"10px" ,overflow:"hidden" ,paddingBottom:"10px"}}>
        <img height={340} width={340} style={{objectFit:"cover"}} src={item.product[0].image} alt="" />
        <h3 style={{color:"#111" ,textAlign:"center"}}>{item.product[0].name}</h3>
        <p style={{color:"#111",textAlign:"center"}}>status: pending</p>
        <div style={{textAlign:"center"}}>
            <button style={{border:"none",backgroundColor:"orange", padding:"2px 10px"}}>Payment procces</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default PetsAdoptionApprowR
