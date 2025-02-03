import React, { useState,useContext} from 'react'
import UserContext from "..//../ContexApi/UsedContexApi.js"
import { Link } from 'react-router-dom'

const SearchInput = () => {

    const {products2} = useContext(UserContext)
    const [products,setProducts] = useState([])
    const [inputvalue ,SetInputvalue] = useState({})

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        SetInputvalue({...inputvalue, [name]:value})
    }

  
  const HandelSumbit = (e) => {
    e.preventDefault()
    const regexTest = (value, query) =>
        new RegExp(query, "i").test(value) || query === "";
  
      const filteredProducts = products2.filter((p) =>
        regexTest(p.name, inputvalue.name) &&
        regexTest(p.type, inputvalue.type) &&
        regexTest(p.size, inputvalue.size) &&
        regexTest(p.price, inputvalue.price)
      );
  
      setProducts(filteredProducts);
      SetInputvalue({name:"",type:"", size:"", price:""})
}

    
  return (
    <div style={{padding:"100px"}}>
        
      <form onSubmit={HandelSumbit} style={{backgroundColor:"#323030",height:"50vh" ,textAlign:"center" ,paddingTop:"100px"}}>
      <h1>Find your pets</h1>
        <div style={{padding:"30px"}}>
        <input style={{padding:"10px", marginRight:"10px" }} type="text" name="name" value={inputvalue.name} placeholder='Search by name' onChange={handelChange} />
        <input style={{padding:"10px", marginRight:"10px"}} type="text" name="type" value={inputvalue.type} placeholder='search by type' onChange={handelChange} />
        <input style={{padding:"10px",marginRight:"10px"}} type="text" name="size" value={inputvalue.size} placeholder='search size' onChange={handelChange} />
        <input style={{padding:"10px",marginRight:"10px"}} type="text" name="price" value={inputvalue.price} placeholder='search by price' onChange={handelChange} />
        </div>
        <button style={{padding:"10px 50px" ,backgroundColor:"#1ab3ca" ,border:"none" , borderRadius:"10px"}} type='submit'>sarch</button>
      </form>

      <ul style={{padding:"100px 0px",listStyleType:"none" ,display:"flex" ,flexWrap:"wrap" ,alignItems:"center" ,justifyContent:"space-evenly",gap:"20px" }}>
        {products.length > 0 ? (
          products.map((p, index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${p.id}`}><li style={{backgroundColor:"#323030",padding:"10px"}} key={p.id}>
                <img  height={350} width={350} style={{objectFit:"cover"}} src={p.image} alt="ff" />
              <h3 style={{color:"#fff"}}>{p.name}</h3>
              <p style={{color:"#fff"}}>Type: {p.type}, Size: {p.size}, Price: ${p.price}</p>
            </li></Link>
          ))
        ) : (
            products2.map((p, index) => (
                <Link style={{textDecoration:"none"}} to={`/Product/${p.id}`}> <div style={{backgroundColor:"#323030" ,borderRadius:"20px" ,padding:"10px"}} key={p.id} >
                    <img height={350} width={350} src={p.image}  style={{objectFit:"cover" ,borderRadius:"20px"}} alt="ff" />
                  <h3 style={{color:"#fff"}}>{p.name}</h3>
                  <p style={{color:"#fff"}}>Type: {p.type}, Size: {p.size}, Price: ${p.price}</p>
                </div></Link>
              ))
        )}
      </ul>
    </div>
  )
}

export default SearchInput





    // Filtering logic
//   useEffect(() => {
//     const regexTest = (value, query) =>
//       new RegExp(query, "i").test(value) || query === "";

//     const filteredProducts = products2.filter((p) =>
//       regexTest(p.name, inputvalue.name) &&
//       regexTest(p.type, inputvalue.type) &&
//       regexTest(p.size, inputvalue.size) &&
//       regexTest(p.price, inputvalue.price)
//     );

//     setProducts(filteredProducts);
//   }, [inputvalue]);
