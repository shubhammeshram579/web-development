import React from 'react'
import AdoptionLikelihood from "./Charts/AdoptionLikelihood.jsx"
import PetsTypeDis from "./Charts/PetsTypeDis.jsx"
import DistributionBreed from "./Charts/DistributionBreed.jsx"
import DisbutionColor from "./Charts/DisbutionColor.jsx"
import DistributionPetSize from "./Charts/DistributionPetSize.jsx"
import MultiChartPetsType from "./Charts/MultiChartPetsType.jsx"
import PetsVacanationStatus from "./Charts/PetsVacanationStatus.jsx"
import HeathCondition from "./Charts/HeathCondition.jsx"
import AdoptionPreviseOwner from "./Charts/AdoptionPreviseOwner.jsx"
import TimeInShelterDays from "./Charts/TimeInShelterDays.jsx"

import MyCalendar from "../Calender/MyCalendar.jsx"

// import MultiplePieCharts from "./Charts/Demo.jsx"

const PetsAdoption = () => {
  return (
    <>
    <div style={{backgroundColor:"#ddd",paddingBottom:"20px"}}>
     
      <div style={{paddingTop:"150px",paddingBottom:"50px",display:"flex", alignItems:"center" ,justifyContent:"center" ,gap:"100px",paddingRight:"100px"}}>
        <div style={{backgroundColor:"#fff",color:"#111",padding:"2px 60px" ,borderRadius:"10px"}}>
        <h3 >Selter Pets</h3>
        <p style={{textAlign:"center", fontSize:"1vw"}}>250</p>
        </div>
        <div style={{backgroundColor:"#fff",color:"#111",padding:"2px 50px",borderRadius:"10px"}}>
        <h3 >Cats</h3>
        <p style={{textAlign:"center",fontSize:"1vw"}}>100</p>
        </div>
        <div style={{backgroundColor:"#fff",color:"#111",padding:"2px 50px",borderRadius:"10px"}}>
        <h3 >Dogs</h3>
        <p style={{textAlign:"center",fontSize:"1vw"}}>150</p>
        </div>
        <div style={{backgroundColor:"#fff",color:"#111",padding:"2px 50px",borderRadius:"10px"}}>
        <h3 >Vacanation</h3>
        <p style={{textAlign:"center",fontSize:"1vw"}}>200</p>
        </div>
   
      </div>
    <div style={{width:"85%",marginLeft:"15%",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"row"}}>
      
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
        <AdoptionLikelihood />
        <MultiChartPetsType />
        {/* <PetsTypeDis /> */}
        <DistributionBreed />
        <DisbutionColor />
        <DistributionPetSize />
        <PetsVacanationStatus />
        <HeathCondition />
        <AdoptionPreviseOwner />
        <TimeInShelterDays />

        {/* <MultiplePieCharts /> */}
        
    </div>
    <div style={{position:"sticky" ,top:"250px",marginTop:"-50px"}}>
      <MyCalendar />
    </div>
    </div>
    </div>
    </>
  )
}

export default PetsAdoption
