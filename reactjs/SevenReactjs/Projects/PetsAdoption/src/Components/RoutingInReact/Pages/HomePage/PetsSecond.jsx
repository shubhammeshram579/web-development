import React from "react";
import img from "./pets.png"
import TopProject from "./TopProject";

const PetsSecond = () => {
  return (
    <div >
      <div className="page1" style={{minHeight:"50vh" ,display:"flex",alignItems:"start",justifyContent:"center"}}>
        <div className="card2" style={{height:"50vh" ,padding:"100px"}}>
          <h1 style={{color:"#3B2321",fontSize:"4vw"}}>Your Family, Our Friend</h1>
          <p style={{color:"#FB8A22",fontSize:"1.2vw"}}>
            We understand that your four-legged friends are an inseparable part
            of your family, and we are dedicated to providing them with
            exceptional care. That's why we've created a unique practice with
            values that set us apart.
          </p>
        </div>
        <div className="card" style={{margin:"50px",marginTop:"200px", padding:"20px",backgroundColor:"#FFDAB8",borderRadius:"10px"}}>
          <div className="subcard" style={{padding:"20px",display:"flex",alignItems:"end",justifyContent:"space-between" ,backgroundColor:"#FFDAB8"}}>
            <h1 style={{color:"#3B2321"}}>Safety</h1>
            <img src="https://kindredpetcare.com/img/adva1.svg" alt="" style={{height:"20vw"}}/>
          </div>
          <p style={{color:"#3B2321"}}>
            Safety is of utmost importance to us. You can rest assured that your
            pet's well-being and security are always our focus. We go above and
            beyond to ensure a safe service at every phase of treatment.
          </p>
        </div>
      </div>
      <div className="page2" style={{minHeight:"50vh" ,display:"flex",alignItems:"start",justifyContent:"space-between",padding:"100px",}} >
        <div className="card" style={{minHeight:"50vh",marginTop:"-300px", width:"45%" ,display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",borderRadius:"10px",backgroundColor:"#FFDAB8"}}>
          <div className="subcard" style={{padding:"20px",display:"flex",alignItems:"end",justifyContent:"space-between" ,}}>
            <h1 style={{color:"#3B2321"}}>Affordability</h1>
            <img src="https://kindredpetcare.com/img/adva2.svg" alt=""  style={{height:"20vw"}}/>
          </div>
          <p style={{width:"90%" ,paddingLeft:"20px",color:"#3B2321"}}>
            We are committed to making high-quality services accessible to all
            pet owners. We believe that every pet deserves exceptional care,
            regardless of financial limitations. By offering competitive and
            reasonable pricing, we strive to help as many pets as possible,
            positively impacting their lives.
          </p>
        </div>
        <div className="card">
          <img height={700}  src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{borderRadius:"20px"}} />
        </div>
      </div>
      <div className="page3" style={{padding:"100px", display:"flex", alignItems:"center",justifyContent:"start", marginLeft:"100px"}}>
        <div className="card" style={{minHeight:"50vh",marginTop:"-300px", width:"50%" ,display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",borderRadius:"10px",backgroundColor:"#FFDAB8"}} >
          <div  style={{padding:"20px",display:"flex",alignItems:"end",justifyContent:"space-between" ,}}>
            <h1  style={{color:"#3B2321"}}>Compassion</h1>
            <img src="https://kindredpetcare.com/img/adva3.svg" alt="" style={{height:"20vw"}} />
          </div>
          <p style={{width:"90%" ,paddingLeft:"20px",color:"#3B2321"}}>
            At Kindred, we believe in building strong, lasting relationships
            based on shared values. Our team fosters a culture of empathy and
            respect, which allows us to grow a trusting atmosphere. Our
            kind-hearted community means a lot to us, and we give back as much
            as possible.
          </p>
        </div>
      </div>
       <TopProject />
      <div className="page4" style={{minHeight:"60vh",display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h1 style={{color:"#3B2321"}}>Because they're family.</h1>
        <img src={img} alt="" style={{width:"100%"}}/>
      </div>
    </div>
  );
};

export default PetsSecond;
