import React from 'react'
import Plot from 'react-plotly.js'

const DistributionPetSize = () => {
    const xArray = ["Small","Medium","Large"];
    const yArray = [329,363,335];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"350px" ,height:"300px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            labels: xArray,
            values: yArray,
            // hole: .2,
            type: "pie",
            pull:[0.1, 0.1, 0.1],
            marker: {
              colors: ['#1f77b4', 'rebeccapurple', '#2ca02c']
            }
          }
        ]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#222", font: { color: "#111" },width: 350, height: 340, title: { text: "Pets Size", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default DistributionPetSize
