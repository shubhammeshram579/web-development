import React, { useState ,useContext, useEffect, useCallback } from "react";
import UserContext from "..//../ContexApi/UsedContexApi.js"
import { useSelector,useDispatch } from "react-redux";
import {removeCard} from "..//..//..//..//../src/ReduxStrore/AuthSlic.js"
import { Link } from "react-router-dom";


const AddCard = () => {

  const {products2} = useContext(UserContext);
  const dispatch = useDispatch()
  const addcardsItems = useSelector((state) => state.auth.cards)

  const handelClick = (id) =>{
    dispatch(removeCard(id))
  }

  return (
   <>
   <div style={{ display:"flex",alignItems:"center", justifyContent:"space-evenly", flexDirection:"column" ,padding:"200px"}}>
    {addcardsItems.map((p) => (
      <div  className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",width:"80%",padding:"20px",margin:"10px"}}>
        <img className="rounded" height={200} width={200} src={p.image} alt={p.name} />
        <p>{p.name}</p>
        <p>{p.size}</p>
        <p>{p.age}</p>
        <p>{p.price}</p>
        <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
        <button onClick={() => handelClick(p.id)} style={{padding:"8px 20px" ,borderRadius:"100px",border:"none", backgroundColor:"transparent" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-info"></i></button>
      </div>
    ))}

    {products2.slice(2,4).map((p) => (
          <div className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",width:"80%",padding:"20px",margin:"10px"}}>
            <img className="rounded" height={200} width={200} src={p.image} alt={p.name} />
            <p>{p.name}</p>
            <p>{p.size}</p>
            <p>{p.age}</p>
            <p>{p.price}</p>
            <Link to={`/AdoptionPayment/${p.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">Adopt</button></Link>
            <button style={{padding:"8px 20px" ,borderRadius:"100px",border:"none", backgroundColor:"transparent" ,fontSize:"20px"}}><i className="fa-solid fa-trash text-info"></i></button>
          </div>
        ))}
   </div>
   </>

  );
};

export default AddCard;

