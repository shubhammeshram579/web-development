import React from 'react'
import Plot from 'react-plotly.js'

const PlotChart = () => {
    const xArray = ["Maharashtra","Karnataka","Delhi","AP","HP","MP"];
    const yArray = [55, 49, 44, 24, 15 ,29];

    


  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"350px" ,height:"300px", overflow:"hidden"}}>
       <Plot
        data = {[{
            x: yArray,
            y: xArray,
            type: "bar",
            orientation:"h",
            marker: {color:"rebeccapurple"}
          }]}
          layout={ { paper_bgcolor: "#fff", plot_bgcolor: "#fff", font: { color: "#111" },width: 350, height: 340, title: { text: "State wise", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default PlotChart
