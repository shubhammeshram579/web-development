import React from 'react'
import Plot from 'react-plotly.js'

const TopPets = () => {
    const xArray = ["Bengal","Ragdoll","Siamese","Maine Coon","Domestic Shorthair","Bulldog","French Bulldog"];
    const yArray = [55, 49, 44, 40, 30 ,29,24];

    


  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"430px" ,height:"340px", overflow:"hidden"}}>
       <Plot
        data = {[{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation:"v",
            marker: {color:"rebeccapurple"}
          }]}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 430, height: 340, title: { text: "Top Breeds", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default TopPets
