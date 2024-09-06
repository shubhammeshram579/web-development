import React , {useState ,useEffect} from 'react'
import "..//../App.css"
// import {motion} from "framer-motion"
// import { CSSTransition } from 'react-transition-group';

function Contenier({children}) {
  const [visible, setVisible] = useState(false);




  useEffect(() => {
    // Delay the visibility state change to trigger smooth transition
    setTimeout(() => {
        setVisible(true);
    }, 100); // Delay for smooth transition
}, []);

  return (
   
    <div className={`page-container w-full mx-auto overflow-hidden ${visible ? 'visible' : ''}`}>{children}</div>

  )
}

export default Contenier