import React ,{useState,useEffect,useContext} from 'react'
import { useParams,Link ,useNavigate} from 'react-router-dom'
import UserContext from "..//../ContexApi/UsedContexApi.js"
import {useSelector,useDispatch} from "react-redux"
import {adoptionReq,setPaymentStatus,petShelterAdd} from "..//..//..//../ReduxStrore/AuthSlic.js"


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
    const [ReqApprow,setReqApprow] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentuser = useSelector((state) => state.auth.user)
    const adoptionRequestdata = useSelector((state) => state.auth.adoptionRequest)

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;

    


    // fatch adoption request appeover data from redux
    useEffect(() => {
        const fatchData = async () => {
        const response = await adoptionRequestdata.filter((i) => (i.product[0].id === parseInt(postId)));
        console.log("ssss",response)
        setPetReqS(response[0].status)
        setAprowForm(response[0].formInpute)
        setReqApprow(response[0])
    }

    fatchData()
    },[postId])
    
  // console.log("ReqApprow",ReqApprow)

    // fatch cantexAp data
    useEffect(() => {
        const fatchData = async () => {
            const response = await products2.filter((p) => (p.id === parseInt(postId)))
            setProduct(response)
        }

        fatchData()

    },[postId])


    // gst and pet shelter price calculation
   useEffect(() => {
    product.filter((i) => {
        let gstCal = i.price * 18 / 100;
        // console.log(gstCal);
        setGstAmt(gstCal)
        setTotalamt(i.price + gstCal);
        setPetName(i.name)

    })
   },[product])


// handel inpute form
const HandelChange = (e) => {
    const {name,value} = e.target;
    setFormInpute((values) => ({...values, [name]:value}))
}

// handel btn for request send pet adopetion
const handelSumbit = (e) => {
    e.preventDefault();
    const adoptionReqdata = {id: Math.random() ,formInpute:formInpute,product:product,currentuser:currentuser, status:false}
    setFormData(adoptionReqdata);
    dispatch(adoptionReq(adoptionReqdata));
    alert("adoption request send succefully you get notifiction soon")
    setFormInpute({address:"",city:"",state:"",pincode:"",message:""})
    navigate("/Addcard/:postId")
    
}


// payment razorpay
const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  
  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: razorpayKey, // Replace with your Razorpay Key ID
      amount: totalamt * 100, // Amount in paise (e.g., ₹500)
      currency: "INR",
      name: "Pets Adopt",
      description: "Test Transaction",
    //   image: "https://your-logo-url.com", // Optional
      handler: (response) => {
        console.log("Payment Successful:", response);
        dispatch(setPaymentStatus("success"));
        dispatch(petShelterAdd(ReqApprow));
        alert("Payment Successful!");
        navigate("/Shelters")
      },
      prefill: {
        name: "Shubham Meshram",
        email: currentuser.email,
        contact: "7038956822",
      },
      theme: {
        color: "#F37254",
      },
    };

   

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };



if(!currentuser){
    return (
        <div style={{padding:"200px" ,textAlign:"center",fontSize:"2vw"}}>user <Link className="text-info" to="/Login">Login</Link> first  </div>
    )
}

    
  return (
    <div style={{minHeight:"100vh" ,paddingTop:"120px"}} className='bg-dark'>
    <div style={{display:"flex" ,alignItems:"start",justifyContent:"space-between",padding:"5px 100px"}}>
      <div className="p-5 page1"  style={{width:"50%"}}>
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

                {petReqS === true ? (null) : (<button style={{padding:"10px 50px" ,borderRadius:"20px",backgroundColor:"orange",border:"none"}} type='sumbit'>Adoption Request</button>)}
            </form>
            {petReqS === true ? (<button onClick={handlePayment} style={{padding:"10px 50px" ,borderRadius:"20px",backgroundColor:"orange",border:"none", marginTop:"20px"}} >Payment continue</button>) :(null)}
        </div>

      </div>
      {product.map((product) => (
      <div key={product.id} className="bg-dark page2" style={{width:"50%" ,padding:"48px 100px"}}>
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
