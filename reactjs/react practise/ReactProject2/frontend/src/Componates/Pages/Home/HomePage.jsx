import React from "react";
import { img, video ,Product} from "..//../index.js";

function HomePage() {
  return (
    <>
      <div className="home min-h-[100vh] w-full flex items-center justify-between  bg-[#F1E1c7]">
        <div className="card w-[50%]">
          <h1 className="text-orange-900 text-[13vw] font-bold pl-20">
            Sujita <span className="text-3xl ml-[-60px]">Saree.co</span>
          </h1>
        </div>
        <div className="card2 w-[50%]">
          <img
            className="w-full h-[50vw] object-contain"
            src="https://manyavar.scene7.com/is/image/manyavar/ULB4619V_418-ORANGE.5498_23-09-2023-20-34:650x900"
            alt=""
          />
        </div>
      </div>

      <div className="page2 p-10 bg-[#F1E1c7]">
        <video src={video} autoPlay muted loop></video>
      </div>
      <div className="page3 min-h-[100vh] flex items-center justify-evenly bg-[#F1E1c7]">
        <div className="card1">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/11729315/pexels-photo-11729315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="card2">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/18166782/pexels-photo-18166782/free-photo-of-smiling-woman-in-decorated-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="card3">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/25655890/pexels-photo-25655890/free-photo-of-woman-standing-in-traditional-clothing-and-with-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="page4 min-h-[100vh] flex items-center justify-evenly bg-[#F1E1c7]">
        <div className="card1">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/12642964/pexels-photo-12642964.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="card2">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/12696380/pexels-photo-12696380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="card3">
          <img
            className="h-[85vh] object-cover rounded-lg"
            src="https://images.pexels.com/photos/11740278/pexels-photo-11740278.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
      <div className="page5 min-h-[100vh] w-full bg-[#F1E1c7]">
        <img
          className="h-[95vh] w-full pl-5 pr-5 object-cover absolute z-10 rounded-2xl"
          src="https://images.pexels.com/photos/4121047/pexels-photo-4121047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className=" relative z-20 text-white text-[2vw] h-[95vh] w-[98%] ml-5 p-20 bg-[#11111186] flex items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          doloribus incidunt ipsa illum, corrupti optio. Temporibus nisi, veniam
          deleniti magni asperiores nulla. Amet eos vitae esse assumenda sint
          magnam illum natus iste sapiente odio eum culpa unde est magni
          corrupti tenetur obcaecati aut, harum dolore laborum reiciendis enim,
          pariatur aperiam.
        </p>
      </div>
      <Product />
    </>
  );
}

export default HomePage;
