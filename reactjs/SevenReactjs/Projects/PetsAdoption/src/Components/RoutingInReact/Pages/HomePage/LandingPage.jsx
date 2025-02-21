import React, { useState, useEffect } from "react";
import video from "..//..//..//../assets/Video.mp4";
import "..//..//..//../App.css";
import { Link } from "react-router-dom";
// import SearchInput from "../SearchPets/SearchInput.jsx"
import img from "./petsDon.png"
import Logo from "..//../Logo/Logo.jsx"

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    // "https://images.pexels.com/photos/6568492/pexels-photo-6568492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/16652369/pexels-photo-16652369/free-photo-of-dogs-with-their-owners-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://img.freepik.com/free-photo/woman-holding-adopt-me-sign-rescue-dog_23-2148682944.jpg?t=st=1738140301~exp=1738143901~hmac=04f63d98a377224b07154274eade5bab7472a54ed1207774d8d91ee9fab4f46c&w=996",
    // "https://img.freepik.com/free-photo/girls-with-dog-grass_23-2147814346.jpg?t=st=1738140356~exp=1738143956~hmac=6fa770e757ef48935c3a4bde8f657435bb1d58dde46aeb7a38330ad36501cd5d&w=996",
    // "https://img.freepik.com/free-photo/cartoon-scene-depicting-human-pet-friendship-affection_23-2151444514.jpg?t=st=1738140508~exp=1738144108~hmac=f6d343a25f77ce9dfd278968a31e7c699266edc5d9442dd3f9c740d539e58caf&w=826",
    // "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033987.jpg?t=st=1738611839~exp=1738615439~hmac=7e9028930fadfd725aaa10e468a25abfcd481506efba86d9d93216159e791dcd&w=740",
    // "https://img.freepik.com/free-photo/3d-illustration-pet-with-their-owner_23-2151933540.jpg?t=st=1738612081~exp=1738615681~hmac=cd2d4e468f222b7ff1c5e712eea74339af3e774935218d229c54ad633007ae96&w=826",
    // "https://img.freepik.com/free-photo/portrait-cute-breed-dog-dark-background-studio_613910-1231.jpg?t=st=1738612516~exp=1738616116~hmac=a0448a7592b525b9fc66837d0ff742306e0e5b4e02ead1b02a7a1729a6f742dc&w=996",
    // "https://img.freepik.com/free-photo/sideways-cute-dog-standing_23-2148423723.jpg?t=st=1738612664~exp=1738616264~hmac=f28f06d26520f9810fd9879683d84205bc810e376687c61d31f366d1b53b451d&w=826",
    // "https://img.freepik.com/free-photo/3d-illustration-pet-with-their-owner_23-2151933571.jpg?t=st=1738612335~exp=1738615935~hmac=e71c4e3c31fbfcf2ec48a36fbfe5df8fbf372b72bfed1a4f2e21876f0c29b7bf&w=826",
    // "https://img.freepik.com/free-photo/3d-illustration-pet-with-their-owner_23-2151933565.jpg?t=st=1738148991~exp=1738152591~hmac=a034204127f842e1b202c351d8c71d69816ce3cb90d5d1e13be380fe33a0d95a&w=826",
    "https://img.freepik.com/free-photo/adorable-looking-kitten-with-dog_23-2150886504.jpg?t=st=1738612782~exp=1738616382~hmac=3002b5530beda3e66d5d323676b1b38293492135a83ecde8ca7601e6101a6cbb&w=996",
    "https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806303.jpg?t=st=1738612873~exp=1738616473~hmac=35214cf7a655a0cd7dd57222cac978e25ed8ccc754ed1db173d050f3676bb9bd&w=1060",
    "https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793807.jpg?t=st=1738140546~exp=1738144146~hmac=90e8e05f401b2c108e64a92da98bb2f04f575337614a08aca7cd354c4869148d&w=1060",
    "https://img.freepik.com/free-photo/full-shot-girl-with-dog-outdoors_23-2151061850.jpg?t=st=1738140575~exp=1738144175~hmac=abc442247dfd5738e6d8204056b176f8f454a673edb82f479219804a487a2971&w=996"
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div style={{paddingTop:"87px",minHeight:"120vh"} }>
      <h1
        style={{
          height: "90vh",
          width: "100%",
          position: "absolute",
          zIndex: "999",
          backgroundColor: "#021a1e25",
          paddingTop: "70vh",
          fontSize: "5vh",
          display: "flex",
          flexDirection: "column",
          // textShadow: "5px 5px #111",
          color: "#fff",
          paddingLeft: "20px",
          textAlign:"center"
        }}
      >
        Find your new best friend
        <span style={{fontSize:"1vw"}}>Browse pets from our network of over 14,500 shelters and rescues.</span>
        <Link style={{textDecoration:"none"}} to="/Product/searchinput"><div style={{padding:"20px 0px" ,display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
        <input style={{width:"20vw" ,borderRadius:"5px 0px 0px 5px",backgroundColor:"#fff",border:"none" ,fontWeight:"300" ,paddingBottom:"10px" }} type="search" placeholder="Find your pets" />
        <i style={{backgroundColor:"gray" ,padding:"10px" ,borderRadius:"0px 10px 10px 0px",color:"#fff"}} className="fa-solid fa-magnifying-glass"></i>
        </div></Link>
        {/* <SearchInput /> */}
        
      </h1>
      
      <div style={{ height: "90vh", width: "100%" }} className="slideshow2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide2 ${index === currentIndex ? "active2" : ""}`}
          >
            {/* {slide} Replace this with actual content or images */}
            <img
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
                // objectPosition: "center",
              }}
              src={slide}
              alt="imgs"
            />
          </div>
        ))}
      </div>
      

{/* addtinal  */}
      <div>
        <div className="page1" style={{minHeight:"100vh" ,backgroundColor:"#ffffffb9"}}>
          <h1 style={{paddingTop:"100px" ,color:"#111", display:"flex", alignItems:"center" ,justifyContent:"center" ,marginLeft:"400px"}}>Your Pet Adoption Journey With <span><Logo /></span> </h1>
          <div className="d-flex align-items-start justify-content-around pt-5">
          <div className="card1">
            <img height={700} src={img} alt="" />
          </div>
          <div className="card2" style={{width:"50%"}}>
            <div>
              <h1 className="text-dark">Search Pet</h1>
              <p className="text-dark">Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
            </div>
            <div>
              <h1 className="text-dark">Connect</h1>
              <p className="text-dark">Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
            </div>
            <div>
              <h1 className="text-dark">AdoptLove</h1>
              <p className="text-dark">The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
            </div>
            <div>
              <h1 className="text-dark">Free Vet Consultation</h1>
              <p className="text-dark">ThePetNest will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</p>
            </div>
          </div>
          </div>
        </div>


        <div style={{width:"100%" ,height:"110vh" , display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
      {/* <video style={{height:"100vh" , width:"95%", objectFit:"cover"}} autoPlay muted loop src={video}></video> */}
      <div style={{display:"flex" ,alignItems:"center" ,flexDirection:"column" ,justifyContent:"space-evenly"}}>
        <h1 style={{textTransform:"capitalize" ,textAlign:"center" ,fontSize:"3vw",paddingBottom:"20px"}}>the organization goals </h1>
        <p style={{textAlign:"center" ,fontSize:"1.2vw",width:"70%"}}> We are a passionate group of animal lovers dedicated to giving pets a
          second chance. Our mission is to connect loving homes with pets in
          need of adoption. With years of experience in animal rescue, we ensure
          that each pet receives the best care, love, and attention during their
          time with us.</p>
      </div>
      <iframe style={{padding:"50px",borderRadius:"100px"}} width="120%" height="70%" src="https://www.youtube.com/embed/Qpn1TE1AUAM?si=-pDpY-3keafbx7dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

        <div className="page2" style={{minHeight:"50vh" ,paddingTop:"100px" }}>
          <h1 className="text-center pb-5" >How it works?</h1>
          <div className="card3 d-flex align-items-center justify-content-center" style={{gap:"20px"}}>
            <div className="d-flex align-items-center flex-column">
            <i class="fa-solid fa-magnifying-glass" style={{fontSize:"50px",color:"orange"}}></i>
            <h1>Search</h1>
            <p>Simply enter your city start your search</p>
            </div>
            <div className="d-flex align-items-center flex-column">
            <i className="fa-solid fa-handshake" style={{fontSize:"50px" ,color:"orange"}}></i>
            <h1>Meet</h1>
            <p>Schedule your appointment to meet the pet you love</p>
            </div>
            <div className="d-flex align-items-center flex-column">
              <img height={40} style={{borderRadius:"100px"}} src="https://img.freepik.com/free-vector/adopt-pet-illustration-theme_23-2148539293.jpg" alt="" />
            <h1>Adopt</h1>
            <p>Finnaly adopt the dog or cat you love</p>
            </div>
          </div>
        </div>

        {/* <div className="page3 text-center">
          <div>
            <h1>Why Should You Adopt a Dog or Cat?</h1>
            <p>Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home!</p>
          </div>
          <div>
            <h1>What is the fee to adopt a pet?</h1>
            <p>No, there is no fee for pet adoption on ThePetNest. However, if you adopt from a different city pet owner/rescuer can ask for travel charges. In case if you find someone asking for charges you can write us at support@thepetnest.com.</p>
          </div>
          <div>
            <h1>How old do I need to be to adopt a pet</h1>
            <p>You need to be at least 18+ years old to adopt</p>
          </div>
          <div>
            <h1>Can you return an adopted pet?</h1>
            <p>We understand it can be hard to get an adjusted pet in the new home and vice versa, as long as your reason for returning is reasonable, you'll be welcome to put it up for adoption again</p>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default LandingPage;
