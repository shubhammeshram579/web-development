import React from 'react'
// import LineChart from "./Pages/LineChart.jsx"
// import BarChart from "./Pages/ChartsList/BarChart.jsx"
// import PieChart from "./Pages/ChartsList/PieChart.jsx"
// import DoughnutChart from "./Pages/ChartsList/DoughnutChart.jsx"
// import RadarChart from "./Pages/ChartsList/RadarChat.jsx"
// import PolarAreaChart from "./Pages/ChartsList/PolarChat.jsx"
// import MapChart from "./Pages/ChartsList/MapChart.jsx"

// plotjs 
import PlotChart from "./Pages/PlotlyJs/PlotChart.jsx"
import PiePlot from "./Pages/PlotlyJs/PiePlot.jsx"
import DonutCharts from "./Pages/PlotlyJs/DonutCharts.jsx"
import HorizontalBarCharts from "./Pages/PlotlyJs/HorizontalBarCharts.jsx"
import LineGraphs from "./Pages/PlotlyJs/LineGraphs.jsx"
import BubblePlots from "./Pages/PlotlyJs/BubblePlots.jsx"
import MultiChart from "./Pages/PlotlyJs/MultiChart.jsx"

import PetsSize from "./Pages/PlotlyJs/PetsSize.jsx"
import TopPets from "./Pages/PlotlyJs/TopPets.jsx"

const Admin = () => {
  return (
    
    <div style={{minHeight:"100vh",width:"80%" ,marginLeft:"15%", paddingTop:"150px"}}>
      <div style={{display:"flex", alignItems:"center" ,justifyContent:"end" ,gap:"100px",paddingRight:"100px"}}>
        <div style={{backgroundColor:"#dddd",color:"#111",padding:"2px 60px" ,borderRadius:"10px"}}>
        <h3 >Pets</h3>
        <p style={{textAlign:"center", fontSize:"1vw"}}>250</p>
        </div>
        <div style={{backgroundColor:"#dddd",color:"#111",padding:"2px 50px",borderRadius:"10px"}}>
        <h3 >Selter Pets</h3>
        <p style={{textAlign:"center",fontSize:"1vw"}}>40</p>
        </div>
        <div style={{backgroundColor:"#dddd",color:"#111",padding:"2px 50px",borderRadius:"10px"}}>
        <h3 >Availble Pets</h3>
        <p style={{textAlign:"center",fontSize:"1vw"}}>210</p>
        </div>
      </div>
    <div className="card2" style={{paddingTop:"50px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap: "10px",paddingLeft:"100px",paddingBottom:"100px"}}>
      {/* <LineChart />
      <BarChart />
      <PieChart />
      <DoughnutChart />
      <RadarChart />
      <PolarAreaChart />
      <MapChart /> */}

      {/* plottyjs */}
     
     
      <HorizontalBarCharts />
      <PetsSize />
      <PiePlot />
      
      {/* <DonutCharts /> */}
      <LineGraphs />
      <TopPets />
      <PlotChart />
      
      {/* <BubblePlots /> */}
     
      
      
      {/* <MultiChart /> */}
      
     
    </div>
    </div>
  )
}

export default Admin
