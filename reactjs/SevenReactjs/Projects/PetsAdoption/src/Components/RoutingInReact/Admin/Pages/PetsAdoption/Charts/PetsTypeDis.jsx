import React from 'react'
import Plot from 'react-plotly.js'

const PetsTypeDis = () => {
    const xArray = ["Cat ","Dog "];
    const yArray = [129,263];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"430px" ,height:"340px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            labels: xArray,
            values: yArray,
            hole: .4,
            type: "pie",
            marker: {
              colors: ['#1f77b4', 'rebeccapurple', '#2ca02c']
            }
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#222", font: { color: "#111" },width: 430, height: 340, title: { text: "PetsType", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default PetsTypeDis
