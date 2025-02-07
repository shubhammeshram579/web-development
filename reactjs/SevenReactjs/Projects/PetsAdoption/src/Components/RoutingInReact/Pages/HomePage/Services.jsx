import React from "react";
import Logo from "..//../Logo/Logo.jsx"
const Services = () => {
  return (
    
  <div style={{minHeight:"100vh" ,display:"flex", alignItems:"center",justifyContent:"space-evenly", flexDirection:"column"}}>
    <h1 style={{display:"flex", alignItems:"center" ,justifyContent:"center"}}>Book Pet Care Service With <span><Logo /></span> </h1>

<div className="card-deck d-flex align-items-center justify-content-center" style={{minHeight:"70vh"}}>

  <div className="d-flex">
  <div className="card bg-dark p-2">
    <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://static.vecteezy.com/system/resources/thumbnails/005/731/530/small/dog-grooming-logo-dog-head-with-comb-and-scissors-vector.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Pet Grooming</h5>
      <p className="card-text">Schedule Professional In-Home Grooming Services for Your Cat or
      Dog</p>
      <p className="card-text"><small className="text-muted">Book Pet Grooming →</small></p>
    </div>
  </div>
  <div className="card bg-dark">
  <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://static.vecteezy.com/system/resources/previews/017/485/088/non_2x/animal-and-pet-logo-design-template-free-vector.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Pet Boarding</h5>
      <p className="card-text">Book Trusted Boarding Service for Your Cat or Dog</p>
      <p className="card-text"><small className="text-muted">Book Cat and Dog Boarding Service →</small></p>
    </div>
  </div>
  <div className="card bg-dark">

    <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://www.designmantic.com/logo-images/167119.png?company=Company%20Name&keyword=dog%20walker&slogan=&verify=1" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Dog Walking</h5>
      <p className="card-text">Reserve Personalized Dog Walking Service Near You</p>
      <p className="card-text"><small className="text-muted">Book Dog Walking →</small></p>
    </div>
  </div>
  </div>
  <div className="d-flex">
  <div className="card bg-dark">
   
    <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://static.vecteezy.com/system/resources/previews/008/055/782/non_2x/online-veterinary-medicine-internet-consultation-doctor-healthcare-service-cartoon-illustration-vector.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Online Vet Consultation</h5>
      <p className="card-text">Professional Veterinary Service at Your Home or Online</p>
      <p className="card-text"><small className="text-muted">Book Online Vet Consultation →</small></p>
    </div>
  </div>
  <div className="card bg-dark">
  <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://static.vecteezy.com/system/resources/previews/017/227/108/non_2x/a-man-dog-training-logo-design-vector.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title ">Dog Training</h5>
      <p className="card-text">Schedule Professional Dog Training Service at Your Home</p>
      <p className="card-text"><small className="text-muted">Book Dog Training Service →</small></p>
    </div>
  </div>
  <div className="card bg-dark">
  <img style={{height:"80px" ,width:"80px" ,borderRadius:"100%" ,marginLeft:"40%" ,paddingTop:"10px"}} src="https://thumbs.dreamstime.com/b/adopt-logo-dont-shop-adopt-adoption-concept-vector-illustration-81826442.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Adopt a Pet</h5>
      <p className="card-text"> Give a homeless animal a loving home</p>
      <p className="card-text"><small className="text-muted">Explore Adopt a Pet →</small></p>
    </div>
  </div>
  </div>
</div>
</div>
  );
};

export default Services;
