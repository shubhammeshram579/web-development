import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css"; // Import Flickity styles
import "..//../App.css";
import { Contenier } from "..//index.js";
// import "..//../App.js"
import { gsap } from "gsap";

const FlickityCarousel = () => {
  const flickityRef = useRef(null);

  const circleRefs = useRef([]);
  const newCircleRefs = useRef([]);
  const new3CircleRefs = useRef([]);
  const new4CircleRefs = useRef([]);

  const header1 = useRef(null);
  const header2 = useRef(null);
  const header3 = useRef(null);
  const header4 = useRef(null);

  useEffect(() => {
    // Initialize Flickity
    flickityRef.current = new Flickity(".carousel", {
      cellAlign: "left",
      contain: true,
      autoPlay: 4100, // Autoplay every 2 seconds
      wrapAround: true, // Infinite loop
      prevNextButtons: false, // Hide prev/next buttons
      pageDots: true, // Hide page dots
      // groupCells:2
    });

    // Cleanup Flickity on component unmount
    return () => flickityRef.current.destroy();
  }, []);

  useEffect(() => {
    // Master timeline for all animations
    const masterTimeline = gsap.timeline({ repeat: -1 });

    // Function to create individual timelines for each set of circles
    const createTimeline = (refs) => {
      const tl = gsap.timeline({ yoyo: true });
      refs.forEach((ref, index) => {
        // console.log("name",ref)
        tl.to(ref, {
          y: 200,
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.3,
          opacity: 0,
        }); // Adjust overlap here as needed
      });
      // console.log("ref", refs);
      return tl;
    };

    // Adding all animations to the master timeline
    masterTimeline.add(createTimeline(circleRefs.current), 0); // Starts immediately
    masterTimeline.add(createTimeline(newCircleRefs.current), 0); // Starts after 4 seconds
    masterTimeline.add(createTimeline(new3CircleRefs.current), 0); // Starts after 8 seconds
    masterTimeline.add(createTimeline(new4CircleRefs.current), 0); // Starts after 12 seconds

    return () => masterTimeline.kill();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(header1.current, {
      y: -60,
      duration: 4,
      opacity: 1,
      ease: "power1.inOut",
      transition: "linear 0.5s",
    });
  });
  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(header2.current, {
        y: -60,
        duration: 4,
        opacity: 1,
        ease: "power1.inOut",
        transition: "linear 0.5s",
      });
    }, 3000);
  });
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(header3.current, {
      y: -60,
      duration: 4,
      opacity: 1,
      ease: "power1.inOut",
      transition: "linear 0.5s",
    });
  });
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(header4.current, {
      y: -60,
      duration: 5,
      opacity: 1,
      ease: "power1.inOut",
      transition: "linear 0.5s",
    });
  });

  return (
    <>
      <style>
        {`
          .flickity-page-dots {
            bottom: 550px;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <Contenier>
        <div className="carousel w-full h-[88vh] bg-slate-100">
          <div className="carousel-cell w-full h-[74vh] flex items-center justify-between flex-col pt-20">
            <div className="flex items-center justify-between flex-col gap-10">
              <h1 className="font-semibold text-4xl pt-10">Get your next</h1>
              <h1
                className="opacity-0 font-semibold text-3xl pt-10 text-yellow-600"
                ref={header1}
              >
                chai time snacks idea
              </h1>
            </div>

            <div className="flex items-end justify-between flex-row gap-5">
              <div
                ref={(el) => (circleRefs.current[0] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[370px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/302457/pexels-photo-302457.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div ref={(el) => (circleRefs.current[1] = el)} className="card1">
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div ref={(el) => (circleRefs.current[2] = el)} className="card1">
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1718199/pexels-photo-1718199.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div ref={(el) => (circleRefs.current[3] = el)} className="card1">
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/8531680/pexels-photo-8531680.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (circleRefs.current[4] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (circleRefs.current[5] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/17729730/pexels-photo-17729730/free-photo-of-a-bicycle-parked-outside-a-shop-with-a-sign-that-says-ou-ne-manu.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[200px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (circleRefs.current[6] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[370px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/26950781/pexels-photo-26950781/free-photo-of-donuts-and-pancakes-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/27365301/pexels-photo-27365301/free-photo-of-mexican-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="carousel-cell w-full h-[90vh] flex items-center justify-between flex-col pt-20">
            <div className="flex items-center justify-between flex-col gap-10">
              <h1 className="font-semibold text-4xl pt-10">Get your next</h1>
              <h1
                className="opacity-0 font-semibold  pt-10 text-3xl text-yellow-600"
                ref={header2}
              >
                home decore idea
              </h1>
            </div>
            <div className="card flex items-end justify-between gap-5">
              <div
                ref={(el) => (newCircleRefs.current[0] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6074050/pexels-photo-6074050.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6232545/pexels-photo-6232545.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (newCircleRefs.current[1] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/20278829/pexels-photo-20278829/free-photo-of-mixed-flower-bouquet-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (newCircleRefs.current[2] = el)}
                className="card1"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/4450377/pexels-photo-4450377.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (newCircleRefs.current[3] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/5847724/pexels-photo-5847724.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (newCircleRefs.current[4] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/23495686/pexels-photo-23495686/free-photo-of-group-of-friends-celebrating-birthday-at-home.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (newCircleRefs.current[5] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/5642108/pexels-photo-5642108.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[200px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (newCircleRefs.current[6] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6932293/pexels-photo-6932293.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="carousel-cell w-full h-[90vh] flex items-center justify-between flex-col pt-20">
            <div className="flex items-center justify-between flex-col gap-10">
              <h1 className="font-semibold text-4xl pt-10">Get your next</h1>
              <h1
                className="opacity-0 font-semibold text-3xl  pt-10 text-yellow-600"
                ref={header3}
              >
                outfit idea
              </h1>
            </div>
            <div className="card flex items-end justify-between gap-5">
              <div
                ref={(el) => (new3CircleRefs.current[0] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[1] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[2] = el)}
                className="card1"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[3] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[4] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[5] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[200px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (new3CircleRefs.current[6] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="carousel-cell w-full h-[90vh] flex items-center justify-between flex-col pt-20">
            <div className="flex items-center justify-between flex-col gap-10">
              <h1 className="font-semibold text-4xl pt-10">Get your next</h1>
              <h1
                className=" opacity-0 font-semibold text-3xl  pt-10 text-yellow-600"
                ref={header4}
              >
                DIY Idea
              </h1>
            </div>
            <div className="card flex items-end justify-between gap-5">
              <div
                ref={(el) => (new4CircleRefs.current[0] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6475527/pexels-photo-6475527.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6768487/pexels-photo-6768487.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[1] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/6768421/pexels-photo-6768421.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[2] = el)}
                className="card1"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/4491858/pexels-photo-4491858.jpeg?auto=compress&cs=tinysrgb&w=600https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[3] = el)}
                className="card1"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/27310486/pexels-photo-27310486/free-photo-of-pokemon-ice-cream-pops.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[4] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                {/* <img className='h-[400px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/27837198/pexels-photo-27837198/free-photo-of-a-person-is-making-a-clay-pot-with-a-rolling-pin.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[5] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/7641238/pexels-photo-7641238.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                {/* <img className='h-[200px] w-[250px] rounded-3xl' src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
              <div
                ref={(el) => (new4CircleRefs.current[6] = el)}
                className="card1 flex items-center justify-between gap-3 flex-col"
              >
                <img
                  className="h-[400px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/7213503/pexels-photo-7213503.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="h-[200px] w-[250px] rounded-3xl"
                  src="https://images.pexels.com/photos/7606225/pexels-photo-7606225.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Contenier>
    </>
  );
};

export default FlickityCarousel;

// console.log("circleRefs",circleRefs.current[0])
// const boxRef = useRef(null);
// const circleRef1 = useRef(null);
// const circleRef2 = useRef(null);
// const circleRef3 = useRef(null);
// const circleRef4 = useRef(null);
// const circleRef5 = useRef(null);
// const circleRef6 = useRef(null);
// const circleRef7 = useRef(null);

// const newcircleRef1 = useRef(null);
// const newcircleRef2 = useRef(null);
// const newcircleRef3 = useRef(null);
// const newcircleRef4 = useRef(null);
// const newcircleRef5 = useRef(null);
// const newcircleRef6 = useRef(null);
// const newcircleRef7 = useRef(null);

// const new3circleRef1 = useRef(null);
// const new3circleRef2 = useRef(null);
// const new3circleRef3 = useRef(null);
// const new3circleRef4 = useRef(null);
// const new3circleRef5 = useRef(null);
// const new3circleRef6 = useRef(null);
// const new3circleRef7 = useRef(null);

// const new4circleRef1 = useRef(null);
// const new4circleRef2 = useRef(null);
// const new4circleRef3 = useRef(null);
// const new4circleRef4 = useRef(null);
// const new4circleRef5 = useRef(null);
// const new4circleRef6 = useRef(null);
// const new4circleRef7 = useRef(null);

// useEffect(()=>{
//  setTimeout(()=>{
//   const tl = gsap.timeline({ repeat: -1 ,yoyo: true} );
//   // tl.to(boxRef.current, { x: 100, duration: 1, ease: 'power1.inOut' })
//   tl.to(circleRef1.current, { y: 200, duration: 1,ease: 'power1.inOut',stagger:0.3,opacity:0 },"-=0.5");
//   tl.to(circleRef2.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3 ,opacity:0}, "-=0.5");
//   tl.to(circleRef3.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(circleRef4.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(circleRef5.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(circleRef6.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(circleRef7.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.1,opacity:0}, "-=0.5");
// },0)
// })

// useEffect(()=>{
//   setTimeout(()=>{
//   const tl = gsap.timeline({ repeat: -1, yoyo: true});
//   tl.from(newcircleRef1.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3,opacity:0},"-=0.5");
//   tl.to(newcircleRef2.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3 ,opacity:0}, "-=0.5");
//   tl.to(newcircleRef3.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(newcircleRef4.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(newcircleRef5.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(newcircleRef6.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(newcircleRef7.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
// },4000)
// })

// useEffect(()=>{
//   setTimeout(()=>{
//   const tl = gsap.timeline({ repeat: -1, yoyo: true});
//   tl.from(new3circleRef1.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3,opacity:0},"-=0.5");
//   tl.to(new3circleRef2.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3 ,opacity:0}, "-=0.5");
//   tl.to(new3circleRef3.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new3circleRef4.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new3circleRef5.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new3circleRef6.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new3circleRef7.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
// },8000)
// })

// useEffect(()=>{
//   setTimeout(()=>{
//   const tl = gsap.timeline({ repeat: -1, yoyo: true});
//   tl.from(new4circleRef1.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3,opacity:0},"-=0.5");
//   tl.to(new4circleRef2.current, { y: 200, duration: 1, ease: 'power1.inOut',stagger:0.3 ,opacity:0}, "-=0.5");
//   tl.to(new4circleRef3.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new4circleRef4.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new4circleRef5.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new4circleRef6.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
//   tl.to(new4circleRef7.current, { y: 200, duration: 1, ease: 'power1.inOut' ,stagger:0.3,opacity:0}, "-=0.5");
// },12000)
// })

// .flickity-page-dots .dot {
//   width: 12px;
//   height: 12px;
//   margin: 0 5px;
//   background: #888;
//   border-radius: 50%;
//   opacity: 0.5;
//   transition: opacity 0.3s ease;
// }

// .flickity-page-dots .dot.is-selected {
//   background: #ff5733;
//   opacity: 1;
// }
