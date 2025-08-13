import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeadoptionReq,adoptionReqAceept} from "..//..//..//..//../ReduxStrore/AuthSlic.js"

const AdoptionReq = () => {
    const shelterData = useSelector((state) => state.auth.adoptionRequest)
   
    const dispatch = useDispatch()


    // console.log(shelterData)
    // console.log(shelterData)

    const handelBtn = (id) => {
      dispatch(adoptionReqAceept(id))
      alert("Pet adoption request is approval")
    }

    const removeRequestBtn = (id) => {
      dispatch(removeadoptionReq(id))

    }



  return (
   <div style={{minHeight:"100vh" ,width:"100%", backgroundColor:"#ddd"}}>
    <div style={{paddingTop:"100px",width:"80%",marginLeft:"17%", paddingBottom:"100px" ,display:"flex", flexWrap:"wrap", gap:"20px" }}>
        {shelterData.map((items, index) => (
      <div key={items.id} className="card1" style={{backgroundColor:"#fff",border:"3px solid #117A8B" ,width:"20%" ,color:"#111" ,padding:"10px" ,borderRadius:"10px"}}>
        <div style={{display:"flex", alignItems:"center" ,justifyContent:"space-around"}}>
            <img height={100} width={100} style={{objectFit:"cover" ,borderRadius:"100px"}} src={items.product[0].image} alt="" />
            <h5>{items.product[0].name}</h5>
        
        </div>
        <div style={{padding:"0px",margin:"0px",paddingTop:"20px", lineHeight:"14px"}}>
            <p>Name: shubham</p>
            <p>email: {items.currentuser.email}</p>
            <p>phone: 7849186433</p>
            <p>address: {items.formInpute.address}</p>
            <p>message: {items.formInpute.message}</p>
            <p>message: {items.status}</p>
        </div>
        <div style={{display:"flex", alignItems:"center" ,justifyContent:"space-around",paddingTop:"20px",paddingBottom:"10px"}}>
            <button onClick={() => removeRequestBtn(items.id)} style={{border:"none",backgroundColor:"orange", color:"#fff",padding:"8px 20px",borderRadius:"10px"}}>Reject</button>
            {items.status === false ? (<button onClick={() => handelBtn(items.id)} style={{border:"none",backgroundColor:"green", color:"#fff" ,padding:"8px 10px",borderRadius:"10px"}}>Approval Pending</button>):
            (<button  style={{border:"none",backgroundColor:"#1d899a", color:"#fff" ,padding:"8px 10px",borderRadius:"10px"}}>Accept Approved</button>)} 
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default AdoptionReq
