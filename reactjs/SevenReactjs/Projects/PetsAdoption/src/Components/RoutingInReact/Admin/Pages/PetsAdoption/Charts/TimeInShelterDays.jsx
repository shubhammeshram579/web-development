import React from "react";
import Plot from "react-plotly.js";

const TimeInShelterDays = () => {
  // X-axis labels (categories)
  const xArray = ["Cat","Dog"];

  // Y-axis values (Bar Chart Data)
  const Cats = [7,8,8,9,9,9,10,11,14,14,15];
  const Dogs = [3,4,5,7,9,12,15,18,20,25,27];

  // Y-axis values (Line Chart Data)
  const revenueData = [50,60,70,80,90,100,110,120,130,140,150];

  return (
    <div style={{ backgroundColor: "#fff",margin:"10px",marginTop:"20px", width:"350px", height:"300px" ,overflow:"hidden" ,borderRadius:"10px"}}>
      <Plot
        data={[
          {
            x: revenueData,
            y: Cats,
            type: "scatter",
            name: "Cat",
            marker: { color: "#1f77b4" }, // Blue bars
          },
          {
            x: revenueData,
            y: Dogs,
            type: "scatter",
            name: "Dog",
            marker: { color: "rebeccapurple" }, // Red bars
          },
        ]}
        layout={{
          title: { text: "Pets Adoption by Time Shelter Days", font: { color: "#111" } },
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

export default TimeInShelterDays;
