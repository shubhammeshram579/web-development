import React, { useState } from 'react'
import Admin from "./Admin.jsx"
import { Link } from 'react-router-dom'

import CreatePets from "./Pages/CreatePets/CreatePets.jsx"

const AdminHomepage = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [isVisible2, setIsVisible2] = useState(true);

  return (
    <div style={{display:"flex",alignItems:"start",justifyContent:"space-between",paddingTop:"80px",flexDirection:"row" ,minHeight:"100vh",position:"absolute", zIndex:"9999"}}>
      <div className="card1 bg-dark" style={{width:"15%",height:"100vh" ,padding:"40px 30px" ,position:"fixed",top:"86px",display:"flex" ,alignItems:"start" ,justifyContent:"start", flexDirection:"column"}}>
       
          <h3>AdminPage</h3>
          <div style={{display:"flex",alignItems:"start",gap:"20px",flexDirection:"column",paddingTop:"50px"}}>
          <Link to="/HomeDashboard"><button style={{width:"150px", border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light' >DashBoard</button></Link>
          <Link to="/Users"><button style={{width:"150px", border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light' >Users</button></Link>
          <Link to="/CreatePets"><button style={{width:"150px", border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light' >All Pets</button></Link>
          <Link to="/AdoptionReq"><button style={{width:"150px" ,border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light'  >Adoption Request</button></Link>
          <Link to="/PetsAdoption"><button style={{width:"150px" ,border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light'  >Adoption</button></Link>
          <Link to="/AdminChart"><button style={{width:"150px", border:"none", borderRadius:"10px", padding:"10px 0px"}} className='bg-info text-light' >Report</button></Link>
          <button style={{width:"150px",border:"none", borderRadius:"10px", padding:"10px 0px"}}className='bg-info text-light'  >Settings</button>
          </div>

      </div>
      {/* <div className="card2">
      {isVisible ? <Admin /> : null}
      {isVisible2 ? <CreatePets /> : null}
      
      </div> */}
      
    </div>
  )
}

export default AdminHomepage
