import React from 'react'
import Plot from 'react-plotly.js'

const HorizontalBarCharts = () => {
    const xArray = [55, 49,];
    const yArray = ["Cat","Dog"];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"460px" ,height:"340px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "h",
            marker: {color:"rebeccapurple"}
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 460, height: 340, title: { text: "Category Type", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default HorizontalBarCharts
