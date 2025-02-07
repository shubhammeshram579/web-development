import React, { useState,useContext, useEffect} from 'react'
import UserContext from "..//../ContexApi/UsedContexApi.js"
import { Link} from 'react-router-dom'


const SearchInput = () => {

    const {products2} = useContext(UserContext)
    const [products,setProducts] = useState([])

    const [query, setQuery] = useState('');    
    const [selectType, setSelectType] = useState('');
    const [state ,setState] = useState("")



    // const [selectType ,setSelectType] = useState("");



    // const handelChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     SetInputvalue({...inputvalue, [name]:value})
    // }

  
//   const HandelSumbit = (e) => {
//     e.preventDefault()
//     const regexTest = (value, query) =>
//         new RegExp(query, "i").test(value) || query === "";
  
//       const filteredProducts = products2.filter((p) =>
//         regexTest(p.name, inputvalue.name) &&
//         regexTest(p.type, inputvalue.type) &&
//         regexTest(p.size, inputvalue.size) &&
//         regexTest(p.price, inputvalue.price)
//       );
  
//       setProducts(filteredProducts);
//       SetInputvalue({name:"",type:"", size:"", price:""})


      
// }


// useEffect(() => {
//   const FunctionD = async () => {
//       // await setProducts(SmallDogs)
//       const regex = new RegExp(query , "i");

//       const response = await products2.filter((p) => {
//           const matchQuery = regex.test(p.name) || regex.test(p.type) || regex.test(p.size) || regex.test(p.age);
//           const matchType = selectType ? p.type === selectType:true;
//           return matchQuery && matchType;
         
//       })
//       setProducts(response)

// };
// FunctionD();

// },[query, selectType,products2])




// find the unique state


const LocatinSt = []
products2.forEach((p) => {
  LocatinSt.push(p.location)
})
const uniStar = [...new Set(LocatinSt)]

console.log(uniStar)



const HandelSumbit = (e) => {
  e.preventDefault()
  const FatchQury = async() => {
  const regex = new RegExp(query , "i");

      const response = await products2.filter((p) => {
          const matchQuery = regex.test(p.name) || regex.test(p.type) || regex.test(p.size) || regex.test(p.age);
          const matchType = selectType ? p.type === selectType:true;
          const StateMatch = state ? p.location === state:true;
          return matchQuery && matchType && StateMatch;
         
      })
      setProducts(response)

    }
    FatchQury()

};


const ClearnSerach = () => {
  setSelectType("")
  setQuery("")
  setState("")
}





  return (
    <div style={{padding:"100px"}}>
        
      <form  onSubmit={HandelSumbit} style={{backgroundColor:"#323030",height:"50vh" ,textAlign:"center" ,paddingTop:"100px"}}>
      <h1>Find your pets</h1>
        <div style={{padding:"30px"}}>
        <input style={{padding:"10px", marginRight:"10px" ,width:"20vw"}} type="text" name="name" value={query} placeholder='Search by name,type,size,age' onChange={(e) => setQuery(e.target.value)} />
        <select  style={{padding:"10px 20px" ,marginLeft:"0px"}} name="type" value={selectType} onChange={(e) => setSelectType(e.target.value)}>
          <option value="">Select Pets</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
        </select>

        <select style={{padding:"10px 10px" ,marginLeft:"10px"}} name="State" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
            {uniStar.map((L,index) => (
              <option key={index} value={L}>
                {L}
              </option>
            ))}
        </select>
        </div>
        <button style={{padding:"10px 50px" ,backgroundColor:"#1ab3ca" ,border:"none" , borderRadius:"5px"}} type='submit'>Search</button>
        <button style={{padding:"10px 30px" ,backgroundColor:"#1ab3ca" ,border:"none" , borderRadius:"5px" ,marginLeft:"10px"}} onClick={ClearnSerach}>Clear Filter</button>
      </form>

      {/* productlist */}
      <ul style={{padding:"100px 0px",listStyleType:"none" ,display:"flex" ,flexWrap:"wrap" ,alignItems:"center" ,justifyContent:"space-evenly",gap:"20px" }}>
        {products.length > 0 ? (
          products.map((p, index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${p.id}`}><li style={{backgroundColor:"#323030",padding:"10px"}} key={p.id}>
                <img  height={350} width={350} style={{objectFit:"cover"}} src={p.image} alt="ff" />
              <h3 style={{color:"#fff"}}>{p.name}</h3>
              <p style={{color:"#fff"}}>Size: {p.size}, Price: ₹{p.price}</p>
            </li></Link>
          ))
        ) : (
            products2.map((p, index) => (
                <Link style={{textDecoration:"none"}} to={`/Product/${p.id}`}> <div style={{backgroundColor:"#323030" ,borderRadius:"20px" ,padding:"10px"}} key={p.id} >
                    <img height={350} width={350} src={p.image}  style={{objectFit:"cover" ,borderRadius:"20px"}} alt="ff" />
                  <h3 style={{color:"#fff"}}>{p.name}</h3>
                  <p style={{color:"#fff"}}> Size: {p.size}, Price: ₹{p.price}</p>
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


{/* <input style={{padding:"10px", marginRight:"10px"}} type="text" name="type" value={inputvalue.type} placeholder='search by type' onChange={handelChange} />
        <input style={{padding:"10px",marginRight:"10px"}} type="text" name="size" value={inputvalue.size} placeholder='search size' onChange={handelChange} />
        <input style={{padding:"10px",marginRight:"10px"}} type="text" name="price" value={inputvalue.price} placeholder='search by price' onChange={handelChange} /> */}
