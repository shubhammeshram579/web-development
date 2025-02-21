import React from 'react'
import Plot from 'react-plotly.js'

const BubblePlots = () => {
    const xArray = [1,2,3,4];
    const yArray = [10,20,30,40];


    const trace1 = {
        x: xArray,
        y: yArray,
        mode: 'markers',
        marker: {
          color: ['red', 'green', 'blue', 'orange'],
          size: [20, 30, 40, 50]
        }
      };

    
  return (
    <div style={{marginTop:"10px" ,borderRadius:"10px", backgroundColor:"green", width:"500px" ,height:"400px", overflow:"hidden"}}>
       <Plot
          data = {[trace1]}
        //   layout = {{
        //     title: "Plotting Bubbles"
        //   }}
          layout={ { paper_bgcolor: "#ddd", plot_bgcolor: "#ddd", font: { color: "#111" },width: 500, height: 440, title: { text: "Country Data", font: { color: "#111" } }} }
      />
    </div>
  )
}

export default BubblePlots
