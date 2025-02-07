import React, { useState ,useContext, useEffect, useCallback } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import UserContext from "..//../ContexApi/UsedContexApi.js"

const AddCard = () => {
  const {postId} = useParams();
  const {products2} = useContext(UserContext);

  const [product ,setProduct] = useState([]);

  useEffect(()=> {
    const fatchData = async () => {
      const response = await products2.filter((p) => (p.id === parseInt(postId)))
      setProduct(response)
    };

    fatchData()
  },[])

  console.log(product)

  const handelClick = () =>{
    setProduct([])
  }

  return (
   <>
   <div style={{ display:"flex",alignItems:"center", justifyContent:"space-evenly", flexDirection:"column" ,padding:"200px"}}>
    {product.map((p) => (
      <div className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",width:"80%",padding:"20px"}}>
        <img className="rounded" height={200} width={200} src={p.image} alt={p.name} />
        <p>{p.name}</p>
        <p>{p.size}</p>
        <p>{p.age}</p>
        <p>{p.price}</p>
        <button onClick={handelClick}>RemoveCard</button>
      </div>
    ))}

{products2.slice(2,4).map((p) => (
      <div className="bg-dark rounded" key={p.id} style={{display:"flex",alignItems:"center", justifyContent:"space-evenly",width:"80%",padding:"20px",margin:"10px"}}>
        <img className="rounded" height={200} width={200} src={p.image} alt={p.name} />
        <p>{p.name}</p>
        <p>{p.size}</p>
        <p>{p.age}</p>
        <p>{p.price}</p>
        <button onClick={handelClick}>RemoveCard</button>
      </div>
    ))}
   </div>
   </>

  );
};

export default AddCard;

