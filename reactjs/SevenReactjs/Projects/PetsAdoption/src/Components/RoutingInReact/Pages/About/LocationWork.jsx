import React, { useEffect, useState } from "react";

const LocationWork = () => {
  const [state, setState] = useState([]);

  
  let locationS = [
    {
      state: "Maharashtra",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82&ts=1726670249199",
    },
    {
      state: "Madhya Pradesh",
      image:
        "https://www.i4utravels.com/wp-content/uploads/2021/03/1572436388_madhya_pradesh_web.jpg",
    },
    {
      state: "Andhra Pradesh",
      image:
        "https://cdn.britannica.com/82/144382-050-981C1E3E/harbour-Visakhapatnam-Andhra-Pradesh-India.jpg",
    },
    {
      state: "Himachal Pradesh",
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2023/02/Himachal-Pradesh-in-March-1.webp",
    },
    {
      state: "Delhi",
      image:
        "https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=636&height=358&resize=4",
    },
    {
      state: "Karnataka",
      image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/06/Hampi-in-karnataka-min.jpg?fit=1024%2C668&ssl=1",
    },
  ];

  useEffect(() => {
    setState(locationS);
  },[]);

  return (
    <>
      <div style={{paddingTop:"200px"}}>
        <h1 className="text-center">Our Pet Adoption Services Across India</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3,1fr)`,
          gridGap: "10px",
          padding: "100px 300px",
        }}
      >
        {state.map((L, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ height: "200px", width: "300px", borderRadius: "10px" }}
              src={L.image}
              alt={L.state}
            />
            <h5>{L.state}</h5>
          </div>
        ))}
        <div>
      
        </div>
        
      </div>
      <div>
      <p style={{fontSize:"1.3vw",padding:"0px 300px" ,textAlign:"justify"}}>
          At PetsAdoption, we provide pet adoption services across Maharashtra,
          Madhya Pradesh, Delhi, Andhra Pradesh, Himachal Pradesh, and
          Karnataka. Our mission is to connect loving families with pets in
          need, ensuring a smooth and responsible adoption process. We partner
          with local shelters, rescue organizations, and foster homes to support
          pet adoption, rescue operations, and veterinary care. Whether you're
          in bustling cities like Mumbai, Delhi, or Bengaluru or serene areas
          like Himachal Pradesh, we make it easy to find your perfect pet. Our
          services include adoption events, health checkups, pet counseling, and
          post-adoption support to ensure pets thrive in their new homes. Join
          us in giving every pet a chance at a happy life. <b className="text-info">Start Your Adoption
          Journey Today!</b>
        </p>
      </div>
    </>
  );
};

export default LocationWork;
