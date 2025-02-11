import React ,{useState,useEffect,useContext} from 'react'
import { useParams,Link } from 'react-router-dom'
import UserContext from "..//../ContexApi/UsedContexApi.js"
import {useSelector} from "react-redux"


const AdoptionPayment = () => {
    const {postId} = useParams()
    const {products2} = useContext(UserContext);
    const [product ,setProduct] = useState([])
    const [gstamt ,setGstAmt] = useState(0);
    const [totalamt,setTotalamt] = useState(0)
    const currentuser = useSelector((state) => state.auth.user)

    useEffect(() => {
        const fatchData = async () => {
            const response = await products2.filter((p) => (p.id === parseInt(postId)))
            setProduct(response)

        }

        fatchData()

    },[postId])

   useEffect(() => {
    product.filter((i) => {
        let gstCal = i.price * 18 / 100;
        // console.log(gstCal);
        setGstAmt(gstCal)
        setTotalamt(i.price + gstCal);

    })
   },[product])

//    console.log(currentuser)

if(!currentuser){
    return (
        <div style={{padding:"200px" ,textAlign:"center",fontSize:"2vw"}}>user <Link className="text-info" to="/Login">Login</Link> first  </div>
    )
}

    
  return (
    <div style={{minHeight:"100vh" ,paddingTop:"200px"}} className='bg-dark'>
    <div style={{display:"flex" ,alignItems:"start",justifyContent:"space-between",padding:"5px 100px"}}>
      <div className="page1 p-5"  style={{width:"50%"}}>
        <div>
            <h1>Customers</h1>
            <p>{currentuser ? (currentuser.email) : ("login first")}</p>
        </div>
        <div >
            <h1 style={{padding:"10px 0px"}}>Shipping Address</h1>
            <form style={{display:"flex" ,alignItems:"center",justifyContent:"space-between", width:"80%", flexWrap:"wrap" ,gap:"29px" ,paddingTop:"20px"}} action="">
                <label htmlFor="#">
                    Address <input type="text" name='address' value={"wakad"} placeholder='enter address'/>
                </label>
                <label htmlFor="#">
                    city <input type="text" name='city' value={"pune"} placeholder='enter city' />
                </label>
                <label htmlFor="#">
                    state  <input type="text" name='state' value={"Maharashtra"} placeholder='Maharashtra' />
                </label>
                <label htmlFor="#">
                    Pincode <input type="number" name='pincode' value={"441511"} placeholder='441601' />
                </label>
                <button style={{padding:"10px 30px" ,borderRadius:"20px" ,marginTop:"20px", backgroundColor:"green",border:"none" }} type='sumbit'>update address</button>
            </form>
        </div>

      </div>
      {product.map((product) => (
      <div key={product.id} className="page2 bg-dark" style={{width:"50%" ,padding:"48px 100px"}}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff"}}>
            <h1>ORDER SUMMARY </h1>
            <h5>edit card</h5>
        </div>
        
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff" ,padding:"10px"}}>
           <div style={{display:"flex", alignItems:"center",justifyContent:"center" ,gap:"20px"}}>
           <img height={150} width={200} style={{borderRadius:"10px",objectFit:"cover"}} src={product.image} alt="" />
           <p>{product.name}</p>
           </div>
            <p>₹{product.price}</p>
        </div>
       
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between" ,borderBottom:"1px solid #fff", padding:"10px"}}>
            <h5>Tax Included in Total:GST 18%</h5>
            <p>₹{gstamt}</p>
        </div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
            <h4>Total Payment</h4>
            <p>₹{totalamt}</p>
        </div>
        
      </div>
       ))}
      
    </div>
    <button style={{padding:"10px 50px" ,borderRadius:"20px",marginLeft:"140px",backgroundColor:"orange",border:"none"}} type='sumbit'>Continue payment</button>
    </div>
  )
}

export default AdoptionPayment
