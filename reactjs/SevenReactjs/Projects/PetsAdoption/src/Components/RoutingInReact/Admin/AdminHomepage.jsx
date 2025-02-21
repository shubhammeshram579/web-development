import React from 'react'
import Admin from "./Admin.jsx"
const AdminHomepage = () => {
  return (
    <div style={{display:"flex",alignItems:"start",justifyContent:"space-between",paddingTop:"80px",flexDirection:"row" ,minHeight:"100vh"}}>
      <div className="card1 bg-dark" style={{width:"40%",height:"100vh" ,padding:"40px 30px" ,position:"sticky",top:"85px"}}>
        <ul>
          <h1>AdminPage</h1>
          <li>dashbord</li>
          <li>customer</li>
          <li>createproduct</li>
        </ul>

      </div>
      <div className="card2">
      <Admin />
      </div>
      
    </div>
  )
}

export default AdminHomepage
