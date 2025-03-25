import React, { useState ,useContext, useEffect, useCallback } from "react";
import UserContext from "..//../ContexApi/UsedContexApi.js"
import { useSelector,useDispatch } from "react-redux";
import {removeCard} from "..//..//..//..//../src/ReduxStrore/AuthSlic.js"
import { Link } from "react-router-dom";

import PetsAdoptionApprowR from "../AdoptionRequist/PetsAdoptionApprowR.jsx"


const AddCard = () => {
  const {products2} = useContext(UserContext);
  const dispatch = useDispatch()
  const addcardsItems = useSelector((state) => state.auth.cards)
  const currentUser = useSelector((state) => state.auth.user)
  const [show,setShow] = useState(true)
  const [show2,setShow2] = useState(false)

  const handelClick = (id) =>{
    dispatch(removeCard(id))
  }

  const CardBtn = () => {
    setShow(!show)
    setShow2(false)

  }

  const AdopReqBtn = () => {
    setShow2(!show2)
    setShow(false)
   

  }

  console.log(currentUser)
  return (
   <>
   <div style={{padding:"200px", display:"flex" ,alignItems:"center", flexDirection:"column", gap:"10px"}}>
    <h3 className="bg-info" style={{height:"150px", width:"150px", borderRadius:"100px", textAlign:"center", paddingTop:"50px"}}>{currentUser.email[0]}</h3>
    <p>{currentUser.email}</p>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
      <button onClick={CardBtn} style={{border:"none", padding:"4px 30px", borderRadius:"10px", color:"#fff"}} className="bg-info">Cards</button>
      <button onClick={AdopReqBtn} style={{border:"none", padding:"4px 30px", borderRadius:"10px", color:"#fff"}} className="bg-info">Adopt</button>
    </div>
   </div>
   {show && <div style={{ display:"flex",alignItems:"center", justifyContent:"start" ,flexWrap:"wrap",paddingLeft:"150px",paddingBottom:"200px",marginTop:"-50px"}}>

      {addcardsItems.map((p) => (
          <div className="bg-light" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",flexDirection:"column",width:"17%",height:"45vh",margin:"10px",borderRadius:"15px" ,overflow:"hidden", padding:"2px"}}>
            <img  height={290} width={315} src={p.image} alt={p.name} style={{objectFit:"cover",borderRadius:"15px" }} />
            <p style={{fontSize:"1.3vw",color:"#111"}}>{p.name}</p>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <p style={{color:"#111"}}>{p.size}</p>
            <p style={{color:"#111"}}>{p.age}</p>
            <p style={{color:"#111"}}>{p.price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px",paddingBottom:"10px"}}>
            <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
            <button onClick={() => handelClick(p.id)} className="bg-warning" style={{padding:"5px 20px" ,borderRadius:"100px",border:"none" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-dark"></i></button>
            </div>
          </div>
        ))}

    {products2.slice(2,4).map((p) => (
          <div className="bg-white" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",flexDirection:"column",width:"17%",height:"45vh",margin:"10px",borderRadius:"15px" ,overflow:"hidden",padding:"2px"}}>
            <img  height={290} width={315} src={p.image} alt={p.name} style={{objectFit:"cover",borderRadius:"15px" }} />
            <p style={{fontSize:"1.3vw", color:"#111"}}>{p.name}</p>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <p style={{color:"#111"}}>{p.size}</p>
            <p style={{color:"#111"}}>{p.age}</p>
            <p style={{color:"#111"}}>{p.price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px", paddingBottom:"10px"}}>
            <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
            <button className="bg-warning" style={{padding:"5px 20px" ,borderRadius:"100px",border:"none" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-dark"></i></button>
            </div>
          </div>
        ))}
   </div>}

   {show2 && <div style={{paddingBottom:"100px"}}>
    <PetsAdoptionApprowR />
   </div>}
   </>

  );
};

export default AddCard;

