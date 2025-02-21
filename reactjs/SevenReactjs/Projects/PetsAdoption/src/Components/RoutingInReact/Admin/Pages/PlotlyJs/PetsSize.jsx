import React from 'react'
import Plot from 'react-plotly.js'

const PetsSize = () => {
    const xArray = ["Small","Medium","Large"];
    const yArray = [329,363,335];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"500px" ,height:"400px", overflow:"hidden"}}>
       <Plot
        
        data = {[{
            labels: xArray,
            values: yArray,
            hole: .4,
            type: "pie"
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#222", font: { color: "#111" },width: 500, height: 440, title: { text: "Pets Size", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default PetsSize
