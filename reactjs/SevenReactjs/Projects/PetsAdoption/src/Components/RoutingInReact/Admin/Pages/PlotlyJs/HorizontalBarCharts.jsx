import React from 'react'
import Plot from 'react-plotly.js'

const HorizontalBarCharts = () => {
    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy","France","Spain","USA","Argentina"];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"500px" ,height:"400px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "h",
            marker: {color:"rgba(255,0,0,0.6)"}
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 500, height: 440, title: { text: "Country Data", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default HorizontalBarCharts
