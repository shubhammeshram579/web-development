import React from 'react'
import AdoptPetPage from '../HomePage/AdopPets'
import ReviewAdop from '../HomePage/ReviewAdop'
import Blog from '../Blog/Blog'
import Services from '../HomePage/Services'

const ServicesPage = () => {
  return (
    <div style={{padding:"10px 10px"}}>
      <div>
        <div style={{width:"100%" ,height:"110vh" , display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
              {/* <video style={{height:"100vh" , width:"95%", objectFit:"cover"}} autoPlay muted loop src={video}></video> */}
              <div style={{display:"flex" ,alignItems:"center" ,flexDirection:"column" ,justifyContent:"space-evenly"}}>
                <h1 style={{textTransform:"capitalize" ,textAlign:"center" ,fontSize:"3vw",paddingBottom:"20px", color:"#3B2321"}}>the organization goals </h1>
                <p style={{textAlign:"center" ,fontSize:"1.2vw",width:"70%",color:"#111" }}> We are a passionate group of animal lovers dedicated to giving pets a
                  second chance. Our mission is to connect loving homes with pets in
                  need of adoption. With years of experience in animal rescue, we ensure
                  that each pet receives the best care, love, and attention during their
                  time with us.</p>
              </div>
              <iframe style={{padding:"50px",borderRadius:"100px"}} width="120%" height="70%" src="https://www.youtube.com/embed/Qpn1TE1AUAM?si=-pDpY-3keafbx7dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
        
                {/* <div className="page2" style={{minHeight:"50vh" ,paddingTop:"100px",backgroundColor:"#F0F1EC" }}>
                  <h1 className="text-center pb-5" style={{color:"#3B2321"}} >How it works?</h1>
                  <div className="card3 d-flex align-items-center justify-content-center" style={{gap:"20px"}}>
                    <div className="d-flex align-items-center flex-column">
                    <i class="fa-solid fa-magnifying-glass" style={{fontSize:"50px",color:"#CC7229"}}></i>
                    <h1 style={{color:"#3B2321"}}>Search</h1>
                    <p style={{color:"#CC7229"}}>Simply enter your city start your search</p>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                    <i className="fa-solid fa-handshake" style={{fontSize:"50px" ,color:"#CC7229"}}></i>
                    <h1 style={{color:"#3B2321"}}>Meet</h1>
                    <p style={{color:"#CC7229"}}>Schedule your appointment to meet the pet you love</p>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <img height={60} style={{borderRadius:"100px", marginTop:"-10px"}} src="https://res.cloudinary.com/dsfepcba9/image/upload/v1751318941/06_jaoqwr.jpg" alt="" />
                    <h1 style={{color:"#3B2321"}}>Adopt</h1>
                    <p style={{color:"#CC7229"}}>Finnaly adopt the dog or cat you love</p>
                    </div>
                  </div>
                </div> */}
      </div>
       <Services />
        <AdoptPetPage />
      
        <ReviewAdop />
        <Blog />
    </div>
  )
}

export default ServicesPage
