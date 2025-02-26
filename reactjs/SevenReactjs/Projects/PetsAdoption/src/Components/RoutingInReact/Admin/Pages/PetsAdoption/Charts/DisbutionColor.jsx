import React from 'react'
import Plot from 'react-plotly.js'

const DisbutionColor = () => {
    const xArray = ["Orange","White","Gray","Brown","Black"];
    const yArray = [234,363,135,44,53,33];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"430px" ,height:"340px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            labels: xArray,
            values: yArray,
            hole: .2,
            type: "pie",
            marker: {
              colors: ['#1f77b4', 'rebeccapurple', '#2ca02c']
            }
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#222", font: { color: "#111" },width: 430, height: 340, title: { text: "Pets Color", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default DisbutionColor
