import React from "react";
import Plot from "react-plotly.js";

const PetsVacanationStatus = () => {
  // X-axis labels (categories)
  const xArray = ["Cat","Dog"];

  // Y-axis values (Bar Chart Data)
  const Cats = [50, 30];
  const Dogs = [23, 50];

  // Y-axis values (Line Chart Data)
//   const revenueData = [60, 95, 125, 150, 200, 250];

  return (
    <div style={{backgroundColor: "#fff",margin:"10px",marginTop:"20px", width:"350px", height:"300px" ,overflow:"hidden" ,borderRadius:"10px"}}>
      <Plot
        data={[
          {
            x: xArray,
            y: Cats,
            type: "bar",
            name: "Likely",
            marker: { color: "#1f77b4" }, // Blue bars
          },
          {
            x: xArray,
            y: Dogs,
            type: "bar",
            name: "Unlikely",
            marker: { color: "rebeccapurple" }, // Red bars
          },
        ]}
        layout={{
          title: { text: "Adoption Likelihood by Vacanation Status", font: { color: "#111" } },
          barmode: "group", // Stacks the bars side by side
          paper_bgcolor: "#fff", // Background color
          plot_bgcolor: "#fff",
          font: { color: "#111" }, // Text color
          xaxis: { title: "Months" },
          yaxis: { title: "Amount ($)" },
          width: 350, height: 300,
        }}
      />
    </div>
  );
};

export default PetsVacanationStatus;
