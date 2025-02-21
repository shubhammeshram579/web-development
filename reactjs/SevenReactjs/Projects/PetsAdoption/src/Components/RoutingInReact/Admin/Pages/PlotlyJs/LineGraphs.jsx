import React from 'react'
import Plot from 'react-plotly.js'

const LineGraphs = () => {
    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"1000px" ,height:"400px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            x: xArray,
            y: yArray,
            mode: "lines+markers",
            type: "scatter"
          }]}

        //   layout = {{
        //     xaxis: {range: [40, 160], title: "Square Meters"},
        //     yaxis: {range: [5, 16], title: "Price in Millions"},
        //     title: "House Prices vs Size"
        //   }}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 1000, height: 440, title: { text: "Pets AgeMonths", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default LineGraphs
