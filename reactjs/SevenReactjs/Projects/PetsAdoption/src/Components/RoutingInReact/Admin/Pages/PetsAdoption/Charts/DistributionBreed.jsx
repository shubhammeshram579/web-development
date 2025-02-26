import React from 'react'
import Plot from 'react-plotly.js'

const DistributionBreed = () => {
    const Cats = [55,49,42,66,34,62,77];
    const Dogs = [52,29,62,63,4,32,73];
    const yArray = ["Labrador","Arabian Mau","German Shepherd","Abyssinian","Rottweilers","Aegean","Boxer"];

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"460px" ,height:"340px", overflow:"hidden"}}>
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
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 460, height: 340, title: { text: "Top Breed", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default DistributionBreed
