import React from "react";
import LocationWork from "./LocationWork.jsx";

const AboutPage = () => {
  return (
    <div
      style={{ paddingTop: "100px", minHeight: "100vh" }}
      className="about-page bg-dark"
    >
      <div className="container">
        <h1 className="text-center mb-4 pt-5">About Us</h1>
        <p className="lead text-center mb-4">
          We are a passionate group of animal lovers dedicated to giving pets a
          second chance. Our mission is to connect loving homes with pets in
          need of adoption. With years of experience in animal rescue, we ensure
          that each pet receives the best care, love, and attention during their
          time with us.
        </p>
        <h2 className="mb-3">Our Mission</h2>
        <ul className="list-group mb-4">
          <li className="list-group-item bg-info">
            To reduce the number of homeless pets by promoting adoption.
          </li>
          <li className="list-group-item bg-dark">
            To educate communities on the importance of responsible pet
            ownership.
          </li>
          <li className="list-group-item bg-info">
            To provide a safe and loving environment for pets waiting for their
            forever home.
          </li>
          <li className="list-group-item bg-dark">
            Fast delivery and responsive customer support.
          </li>
        </ul>
        <h1>Our Team</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:`repeat(3,1fr)`,
            padding:"50px 0px"
          }}
        >
          <div>
            <img
              height={300}
              width={300}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            <p style={{ width: "90%" }}>
              <b>John Doe - Founder & CEO</b> <br /> Passionate animal rescuer
              with 10+ years of experience in anima
            </p>
          </div>
          <div>
            <img
              height={300}
              width={300}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5"
              alt=""
            />
            <p style={{ width: "75%"  }}>
              <b>Jane Smith</b> - Adoption Specialist: Helps match pets with suitable
              families and supports adopters throughout the process.
            </p>
          </div>
          <div>
            <img
              height={300}
              width={300}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg"
              alt=""
            />
            <p style={{ width: "85%" }}>
              <b>Alex Johnson</b> - Veterinarian: Provides medical care and wellness
              checks for the pets in our care.
            </p>
          </div>
        </div>
      </div>
      <LocationWork />
    </div>
  );
};

export default AboutPage;
