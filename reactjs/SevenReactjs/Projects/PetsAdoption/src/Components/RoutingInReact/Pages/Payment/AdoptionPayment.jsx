import React ,{useState,useEffect,useContext} from 'react'
import { useParams,Link ,useNavigate} from 'react-router-dom'
import UserContext from "..//../ContexApi/UsedContexApi.js"
import {useSelector,useDispatch} from "react-redux"
import {adoptionReq} from "..//..//..//../ReduxStrore/AuthSlic.js"


const AdoptionPayment = () => {
    const {postId} = useParams()
    const {products2} = useContext(UserContext);
    const [product ,setProduct] = useState([])
    const [petName, setPetName] = useState("")
    const [gstamt ,setGstAmt] = useState(0);
    const [totalamt,setTotalamt] = useState(0)

    const [formInpute ,setFormInpute] = useState({})
    const [formData ,setFormData] = useState([]);
    // pets request acecept status
    const [petReqS,setPetReqS] = useState({})
    // updated form data fatch from redux toolkit
    const [AprowForm,setAprowForm] = useState({})

    // console.log(message)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentuser = useSelector((state) => state.auth.user)
    const adoptionRequestdata = useSelector((state) => state.auth.adoptionRequest)


    useEffect(() => {
        const fatchData = async () => {
        const response = await adoptionRequestdata.filter((i) => (i.product[0].id === parseInt(postId)));
        console.log("ssss",response[0].formInpute.message)
        setPetReqS(response[0].status)
        setAprowForm(response[0].formInpute)
    }

    fatchData()
    },[postId])
    
  

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
        setPetName(i.name)

    })
   },[product])



const HandelChange = (e) => {
    const {name,value} = e.target;
    setFormInpute((values) => ({...values, [name]:value}))
}

const handelSumbit = (e) => {
    e.preventDefault();
    const adoptionReqdata = {id: Math.random() ,formInpute:formInpute,product:product,currentuser:currentuser, status:false}
    setFormData(adoptionReqdata);
    dispatch(adoptionReq(adoptionReqdata));
    alert("adoption request send succefully you get notifiction soon")
    setFormInpute({address:"",city:"",state:"",pincode:"",message:""})
    navigate("/PetsAdoptionApprowR")
    
}

// console.log(formData)



if(!currentuser){
    return (
        <div style={{padding:"200px" ,textAlign:"center",fontSize:"2vw"}}>user <Link className="text-info" to="/Login">Login</Link> first  </div>
    )
}

    
  return (
    <div style={{minHeight:"100vh" ,paddingTop:"120px"}} className='bg-dark'>
    <div style={{display:"flex" ,alignItems:"start",justifyContent:"space-between",padding:"5px 100px"}}>
      <div className="page1 p-5"  style={{width:"50%"}}>
        <div>
            <h1>SHELTER PARENT</h1>
            <p>Email: {currentuser ? (currentuser.email) : ("login first")}</p>
            <p>Phone: 18797197471</p>
        </div>
        <div >
            <h1 style={{padding:"10px 0px"}}>SHELTER ADDRESS</h1>
            <form onSubmit={handelSumbit} style={{display:"flex" ,alignItems:"center",justifyContent:"space-between", width:"80%", flexWrap:"wrap" ,gap:"29px" ,paddingTop:"20px"}} action="">
                <label htmlFor="#">
                    Address <input type="text" name='address' value={petReqS === true ? (AprowForm.address) : (formInpute.address)}  onChange={HandelChange} placeholder='enter address'/>
                </label>
                <label htmlFor="#">
                    city <input type="text" name='city' value={petReqS === true ? (AprowForm.city) : (formInpute.city)} onChange={HandelChange} placeholder='enter city' />
                </label>
                <label htmlFor="#">
                    state  <input type="text" name='state' value={petReqS === true ? (AprowForm.state) : (formInpute.state)} onChange={HandelChange} placeholder='Maharashtra' />
                </label>
                <label htmlFor="#">
                    Pincode <input type="number" name='pincode' value={petReqS === true ? (AprowForm.pincode) : (formInpute.pincode)} onChange={HandelChange} placeholder='441601' />
                </label>
                <button style={{padding:"10px 20px" ,borderRadius:"20px" ,marginTop:"20px", backgroundColor:"green",border:"none" }} type='sumbit'>update address</button>

                <label htmlFor="message">
                Why do you want to adopt {petName}
                <textarea style={{marginTop:"10px"}} name="message" id="message" cols={80} rows={4} value={petReqS === true ? (AprowForm.message) : (formInpute.message)} onChange={HandelChange}  placeholder='write message' required></textarea>
                </label>

                {petReqS === true ? (<button style={{padding:"10px 50px" ,borderRadius:"20px",backgroundColor:"orange",border:"none"}} type='sumbit'>Payment continue</button>) : (<button style={{padding:"10px 50px" ,borderRadius:"20px",backgroundColor:"orange",border:"none"}} type='sumbit'>Adoption Request</button>)}
            </form>
        </div>

      </div>
      {product.map((product) => (
      <div key={product.id} className="page2 bg-dark" style={{width:"50%" ,padding:"48px 100px"}}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff"}}>
            <h1>PETS </h1>
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
    </div>
  )
}

export default AdoptionPayment
