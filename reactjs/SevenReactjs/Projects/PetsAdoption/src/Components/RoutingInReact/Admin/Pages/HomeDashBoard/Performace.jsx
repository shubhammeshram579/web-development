import React from "react";
import Plot from "react-plotly.js";

const Performace = () => {
  // X-axis labels (categories)

  return (
    <div style={{ backgroundColor: "#fff", width:"320px",height:"350px",borderRadius:"10px", overflow:"hidden" }}>
        <h4 style={{color:"#111" ,paddingLeft:"10px", fontWeight:"500"}}>Performece</h4>
      <Plot
        data={[
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: 6.5,
                // title: { text: "Speed" },
                type: "indicator",
                mode: "gauge+number",
                
            }
        ]}
        layout={{
          title: { text: "Avg Monthly Shelter", font: {color: "#111" } },
          width: 320, height: 300,
        }}
      />
    </div>
  );
};

export default Performace;
