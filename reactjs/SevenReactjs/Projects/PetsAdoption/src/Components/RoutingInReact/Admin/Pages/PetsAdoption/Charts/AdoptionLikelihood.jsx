import React from 'react'
import Plot from 'react-plotly.js'

const AdoptionLikelihood = () => {
    const xArray = ["Unlikely ","Likely "];
    const yArray = [129,263];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"350px" ,height:"300px", overflow:"hidden"}}>
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
          layout={ { paper_bgcolor: "#fff", plot_bgcolor: "#222", font: { color: "#111" },width: 350, height: 340, title: { text: "AdoptionLikelihood", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default AdoptionLikelihood
