import React , {useState ,useEffect ,useRef} from 'react'
import LocomotiveScroll from "locomotive-scroll"
import "..//../App.css"
// import {motion} from "framer-motion"
// import { CSSTransition } from 'react-transition-group';

function Contenier({children}) {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);








  useEffect(() => {
    // Delay the visibility state change to trigger smooth transition
    setTimeout(() => {
        setVisible(true);
    }, 100); // Delay for smooth transition
}, []);




useEffect(() => {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
    smoothMobile: true, // Enable smooth scrolling on mobile
    inertia: 1, // Inertia-based smooth scrolling
    getDirection: true, // Track scroll direction (useful for triggering effects)
    getSpeed: true, // Track scroll speed
    reloadOnContextChange: true, // Reload on content changes
  });

  // Clean up on component unmount
  return () => {
    scroll.destroy();
  };
}, []);





  return (
   
    <div ref={scrollRef} className={`page-container w-full mx-auto overflow-hidden ${visible ? 'visible' : ''}`}>{children}</div>

  )
}

export default Contenier