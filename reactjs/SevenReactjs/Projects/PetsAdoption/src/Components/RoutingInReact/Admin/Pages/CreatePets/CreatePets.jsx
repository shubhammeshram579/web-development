import React, { useState,useContext, useEffect } from 'react'


import {Link } from "react-router-dom"
import UserContext from "..//..//../ContexApi/UsedContexApi.js";

const CreatePets = () => {
  const { products2 } = useContext(UserContext);
    const [formData ,setFormData] = useState({})
    const [data ,setData] = useState([]);
    const [pest ,setPets] = useState([]);
    const [search ,setSearch] = useState("")
    const [selectItem,setSelectItem] = useState("")
    const [isShow,setIsShow] = useState(false)
    
    


    useEffect(() => {
      const fatchdata = async () => {
        try {

          if(selectItem === "All"){
            setPets(products2)
          }else{
              const response = await products2.filter((item) => (item.name === search && item.type === selectItem ))
            console.log(response)
            setPets(response)
          }

          
          
          
        } catch (error) {
          console.log(error || "something fatch data arror")
        }
      }
      fatchdata()
    },[products2,selectItem])



    const HandelChange = (e) => {
        const {name,value} = e.target;
        setFormData((values) => ({...values, [name]:value}))

    }

    const HandelSumbit = (event) => {
        event.preventDefault();
        setData((values) => ([...values,formData]))
        setFormData({name:"",breed:"",type:"",size:"",age:"",adoptionRate:"",location:"",price:"",image:"",description:""})
    }


    const Handelseach = (e) => {
      e.preventDefault()


     
    }



    const HandelShow = () => {
      setIsShow((isShow) => !isShow)

    }

    console.log(pest)

  return (
    <>
    <div style={{display:"flex", alignItems:"start",justifyContent:"center" ,flexDirection:"column",marginLeft:"15%", width:"87%",paddingTop:"100px"}}>
        <h1 style={{padding:"50px"}}>Pets Management</h1>
        <div style={{width:"86%",display:"flex" ,alignItems:"center" ,justifyContent:"space-between",  gap:"100px",paddingBottom:"50px"}}>
          <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-between",  gap:"10px",marginLeft:"60px"}}>
          <input type="text" placeholder='Search Pets' style={{width:"20vw"}} value={search} onChange={(e) => setSearch(e.target.value)} />
          <select name="" id="" style={{padding:"2px 20px"}} value={selectItem} onChange={(e) => setSelectItem(e.target.value)}>
            <option value="All">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            </select>
            
            </div>
            <button className='bg-info' style={{border:"none" ,borderRadius:"10px",padding:"5px"}}  onClick={HandelShow}>Create Pets</button>
        </div>
      {isShow && (<form onSubmit={HandelSumbit} style={{display:"flex", alignItems:"center",justifyContent:"center",gap:"5px",flexDirection:"column",marginLeft:"200px",paddingBottom:"20px"}}>
        <div  style={{display:"flex", alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <div style={{display:"flex", alignItems:"start",justifyContent:"center", flexDirection:"column"}}>
        <label htmlFor="name">PetName</label>
        <input type="text" name="name" id='name' value={formData.name} onChange={HandelChange} />
        <label htmlFor="breed">Breed</label> 
        <input type="text" id='breed' name="breed" value={formData.breed} onChange={HandelChange}  />
        <label htmlFor="type">Type</label>
        <input type="text" name="type" id='type' value={formData.type} onChange={HandelChange} />
        </div>

        <div style={{display:"flex", alignItems:"start",justifyContent:"center", flexDirection:"column"}}>
        <label htmlFor="size">Size </label>
        <input type="text" name="size" id='size' value={formData.size} onChange={HandelChange} />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id='age' value={formData.age} onChange={HandelChange}  />
        <label htmlFor="adoptionRate">AdoptionRate</label>
        <input type="text" name="adoptionRate" id='adoptionRate' value={formData.adoptionRate} onChange={HandelChange} />
        </div>

        <div style={{display:"flex", alignItems:"start",justifyContent:"center", flexDirection:"column"}}>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" value={formData.location} onChange={HandelChange}/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id='price' value={formData.price} onChange={HandelChange} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id='image'  value={formData.image} onChange={HandelChange} placeholder='image url' />
        </div>


        <div style={{display:"flex", alignItems:"start",justifyContent:"center", flexDirection:"column"}}>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols={60} rows={4}></textarea>
        <div style={{display:"flex", alignItems:"start",justifyContent:"center" ,gap:"10px"}}> 
        <button style={{marginTop:"20px",padding:"5px 40px" ,border:"none"}} className='bg-info text-light rounded' type='sumbit'>sumbit</button>
        <button style={{marginTop:"20px",padding:"5px 40px" ,border:"none"}} className='bg-info text-light rounded' type='reset'>reset</button>
        </div>
        </div>
        </div>
      </form>) }
     


     <div style={{width:"100%" ,display:"flex", alignItems:"center",justifyContent:"s" ,flexWrap:"wrap",paddingTop:"10px",paddingLeft:"50px"}}>

     { 
          data.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={product.id} style={{backgroundColor:"#323030" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img  height={320} width={300} style={{borderRadius:"10px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
         
                <p style={{color:"#fff" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
                <p style={{color:"#fff", textAlign:"center"}}>Size: {product.size}, Price: ₹{product.price}</p>
            </div></Link>
        ))
      }

      { products2.length >= 0 ? (
          pest.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={product.id} style={{backgroundColor:"#323030" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img  height={320} width={300} style={{borderRadius:"10px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
         
                <p style={{color:"#fff" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
                <p style={{color:"#fff", textAlign:"center"}}>Size: {product.size}, Price: ₹{product.price}</p>
            </div></Link>
        ))) : (

          products2.map((product,index) => (
            <Link style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={product.id} style={{backgroundColor:"#323030" ,width:"340px" ,height:"400px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img  height={320} width={300} style={{borderRadius:"10px", objectFit:"cover",marginLeft:"20px"}} src={product.image} alt="" />
         
                <p style={{color:"#fff" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
                <p style={{color:"#fff", textAlign:"center"}}>Size: {product.size}, Price: ₹{product.price}</p>
            </div></Link>
        ))

        )
      }
     </div>
    </div>
    </>
  )
}

export default CreatePets


// id: 9,
//           rank: 9,
//           type: "Cat",
//           size: "Medium",
//           age: "Adult",
//           breed: "Ragdoll",
//           location: "Maharashtra",
//           name: "Ragdoll",
//           adoptionRate: "Moderate",
//           price: 3000,
//           description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.",
//           image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp"
