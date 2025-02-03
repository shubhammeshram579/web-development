import React from "react";

const AboutPage = () => {
  return (
    <div style={{marginTop:"100px" ,minHeight:"100vh"}} className="about-page py-5 bg-dark">
      <div className="container">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="lead text-center mb-4">
          We are a passionate group of animal lovers dedicated to giving pets a second chance. Our mission is to connect loving homes with pets in need of adoption. With years of experience in animal rescue, we ensure that each pet receives the best care, love, and attention during their time with us.
        </p>
        <h2 className="mb-3">Our Mission</h2>
        <ul className="list-group mb-4">
          <li className="list-group-item bg-info">To reduce the number of homeless pets by promoting adoption.</li>
          <li className="list-group-item bg-dark">To educate communities on the importance of responsible pet ownership.</li>
          <li className="list-group-item bg-info">To provide a safe and loving environment for pets waiting for their forever home.</li>
          <li className="list-group-item bg-dark">Fast delivery and responsive customer support.</li>
        </ul>
        <h1>Our Team</h1>
        <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <img height={300} width={300} style={{objectFit:"cover"}} src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
          <h5 style={{width:"90%"}}>John Doe - Founder & CEO: Passionate animal rescuer with 10+ years of experience in anima</h5>
        </div>
        <div>
          <img height={300} width={300} style={{objectFit:"cover"}} src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5" alt="" />
          <h5 style={{width:"70%"}}>Jane Smith - Adoption Specialist: Helps match pets with suitable families and supports adopters throughout the process.
          </h5>
        </div>
        <div>
          <img height={300} width={300} style={{objectFit:"cover"}} src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg" alt="" />
          <h5 style={{width:"85%"}}>Alex Johnson - Veterinarian: Provides medical care and wellness checks for the pets in our care.</h5>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
