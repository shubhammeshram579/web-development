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

const Admin = () => {
  return (
    <div style={{paddingTop:"100px",minHeight:"100vh" ,display:"flex" ,alignItems:"center",justifyContent:"space-evenly" ,flexWrap:"wrap"}}>
      {/* <LineChart />
      <BarChart />
      <PieChart />
      <DoughnutChart />
      <RadarChart />
      <PolarAreaChart />
      <MapChart /> */}

      {/* plottyjs */}
     
      <PiePlot />
      <PetsSize />
      <DonutCharts />
      <LineGraphs />
      <PlotChart />
      
      {/* <BubblePlots /> */}
      {/* <HorizontalBarCharts /> */}
      
      
      <MultiChart />
      
     
    </div>
  )
}

export default Admin
