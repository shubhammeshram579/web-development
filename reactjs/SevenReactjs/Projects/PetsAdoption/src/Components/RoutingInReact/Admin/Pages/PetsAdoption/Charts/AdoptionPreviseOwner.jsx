import React from "react";
import Plot from "react-plotly.js";

const AdoptionPreviseOwner = () => {
  // X-axis labels (categories)
  const xArray = ["Cat","Dog"];

  // Y-axis values (Bar Chart Data)
  const Cats = [100, 49];
  const Dogs = [223, 24];

  // Y-axis values (Line Chart Data)
//   const revenueData = [60, 95, 125, 150, 200, 250];

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px",margin:"10px", width:"440px", height:"340px", overflow:"hidden" ,borderRadius:"10px"}}>
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
          title: { text: "Adoption Likelihood by previous Owner", font: { color: "#111" } },
          barmode: "group", // Stacks the bars side by side
          paper_bgcolor: "#fff", // Background color
          plot_bgcolor: "#fff",
          font: { color: "#111" }, // Text color
          xaxis: { title: "Months" },
          yaxis: { title: "Amount ($)" },
          width: 400, height: 320,
        }}
      />
    </div>
  );
};

export default AdoptionPreviseOwner;

