import React from 'react'
import {useSelector} from "react-redux"
import { useNavigate ,Link } from 'react-router-dom'

const PetsAdoptionApprowR = () => {
  const navigate = useNavigate()
     const adoptionRequestdata = useSelector((state) => state.auth.adoptionRequest)
     const currentUser = useSelector((state) => state.auth.user)


  return (
    <>
    <div style={{padding:"200px", display:"flex" ,alignItems:"center", flexDirection:"column", gap:"20px"}}>
    <h3 className="bg-info" style={{height:"150px", width:"150px", borderRadius:"100px", textAlign:"center", paddingTop:"50px"}}>{currentUser.email[0]}</h3>
    <p>{currentUser.email}</p>
  
    <div style={{paddingTop:"50px", display:"flex" ,alignItems:"center",justifyContent:"space-evenly", gap:"50px" ,flexWrap:"wrap"}}>
        {adoptionRequestdata.map((item,index) => (
      <div className="card" style={{width:"340px" ,borderRadius:"10px" ,overflow:"hidden" ,paddingBottom:"10px"}}>
        <img height={300} width={340} style={{objectFit:"cover"}} src={item.product[0].image} alt="" />
        <h3 style={{color:"#111" ,textAlign:"center"}}>{item.product[0].name}</h3>
        <p style={{color:"#111",textAlign:"center"}}>Pet adoption request {item.status === true ? <p style={{color:"green"}}>Approve</p>: <p style={{color:"red"}}>Pendig</p>}</p>
        <div style={{textAlign:"center"}}>
            <Link to={`/AdoptionPayment/${item.product[0].id}`}><button style={{border:"none",backgroundColor:"orange", padding:"2px 10px"}}>Payment procces</button></Link>
        </div>
      </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default PetsAdoptionApprowR
