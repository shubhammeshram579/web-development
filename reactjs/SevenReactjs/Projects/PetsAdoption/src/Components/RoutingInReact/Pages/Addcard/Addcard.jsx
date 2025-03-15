import React, { useState ,useContext, useEffect, useCallback } from "react";
import UserContext from "..//../ContexApi/UsedContexApi.js"
import { useSelector,useDispatch } from "react-redux";
import {removeCard} from "..//..//..//..//../src/ReduxStrore/AuthSlic.js"
import { Link } from "react-router-dom";


const AddCard = () => {

  const {products2} = useContext(UserContext);
  const dispatch = useDispatch()
  const addcardsItems = useSelector((state) => state.auth.cards)
  const currentUser = useSelector((state) => state.auth.user)

  const handelClick = (id) =>{
    dispatch(removeCard(id))
  }

  console.log(currentUser)
  return (
   <>
   <div style={{padding:"200px", display:"flex" ,alignItems:"center", flexDirection:"column", gap:"10px"}}>
    <h3 className="bg-info" style={{height:"150px", width:"150px", borderRadius:"100px", textAlign:"center", paddingTop:"50px"}}>{currentUser.email[0]}</h3>
    <p>{currentUser.email}</p>
   </div>
   <div style={{ display:"flex",alignItems:"center", justifyContent:"start" ,flexWrap:"wrap",paddingLeft:"150px",paddingBottom:"100px",marginTop:"-100px"}}>

      {addcardsItems.map((p) => (
          <div className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",flexDirection:"column",width:"17%",height:"40vh",padding:"20px",margin:"10px"}}>
            <img className="rounded" height={300} width={280} src={p.image} alt={p.name} />
            <p style={{fontSize:"1.3vw"}}>{p.name}</p>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <p>{p.size}</p>
            <p>{p.age}</p>
            <p>{p.price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
            <button onClick={() => handelClick(p.id)} className="bg-warning" style={{padding:"5px 20px" ,borderRadius:"100px",border:"none" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-dark"></i></button>
            </div>
          </div>
        ))}

    {products2.slice(2,4).map((p) => (
          <div className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",flexDirection:"column",width:"17%",height:"40vh",padding:"20px",margin:"10px"}}>
            <img className="rounded" height={300} width={280} src={p.image} alt={p.name} />
            <p style={{fontSize:"1.3vw"}}>{p.name}</p>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <p>{p.size}</p>
            <p>{p.age}</p>
            <p>{p.price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly", gap:"10px"}}>
            <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
            <button className="bg-warning" style={{padding:"5px 20px" ,borderRadius:"100px",border:"none" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-dark"></i></button>
            </div>
          </div>
        ))}
   </div>
   </>

  );
};

export default AddCard;

