import React from 'react'
import Plot from 'react-plotly.js'

const DistributionBreed = () => {
    const Cats = [55,49,42,66,34,62,77];
    const Dogs = [52,29,62,63,4,32,73];
    const yArray = ["Labrador","Arabian Mau","German Shepherd","Abyssinian","Rottweilers","Aegean","Boxer"];

    
  return (
    <div style={{backgroundColor: "#fff",margin:"10px",marginTop:"20px", width:"350px", height:"300px" ,overflow:"hidden" ,borderRadius:"10px"}}>
       <Plot
        
        data = {[{
            x: yArray,
            y: Cats,
            type: "bar",
            orientation: "v",
            name: "Likely",
            marker: {color:"rebeccapurple"}

          },
          {
            x: yArray,
            y: Dogs,
            type: "bar",
            orientation: "v",
            name: "Unlikely",
            marker: {color:"#1f77b4"}
          }
        ]}
          layout={ { paper_bgcolor: "#fff", plot_bgcolor: "#fff", font: { color: "#111" },width: 410, height: 300, title: { text: "Top Breed", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default DistributionBreed
