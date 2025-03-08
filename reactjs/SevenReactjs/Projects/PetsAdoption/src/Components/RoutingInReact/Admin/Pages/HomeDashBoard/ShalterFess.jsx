import React from "react";
import Plot from "react-plotly.js";

const ShalterFess = () => {
  // X-axis labels (categories)
  const xArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Y-axis values (Bar Chart Data)
  const cats = [40, 60, 75, 90, 120, 150];
  const dogs = [20, 35, 50, 60, 80, 100];

  // Y-axis values (Line Chart Data)
  const revenueData = [60, 95, 125, 150, 200, 250];

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px",margin:"10px", width:"600px",borderRadius:"10px" }}>
        <h4 style={{color:"#111"}}>Monthly Sheltes</h4>
      <Plot
        data={[
          {
            x: xArray,
            y: cats,
            type: "bar",
            name: "Cats",
            marker: { color: "#1f77b4" }, // Blue bars
          },
          {
            x: xArray,
            y: dogs,
            type: "bar",
            name: "Dogs",
            marker: { color: "rebeccapurple" }, // Red bars
          },
          {
            x: xArray,
            y: revenueData,
            type: "scatter", // Line chart
            mode: "lines+markers",
            name: "Fess Charge",
            line: { color: "#ffce56", width: 3 },
            marker: { size: 6 },
          },
        ]}
        layout={{
          title: { text: "Fess & cat and dog monthly shelter ", font: { color: "#111" } },
          barmode: "group", // Stacks the bars side by side
          paper_bgcolor: "#fff", // Background color
          plot_bgcolor: "#fff",
          font: { color: "#111" }, // Text color
          xaxis: { title: "Months" },
          yaxis: { title: "Amount ($)" },
          width: 550, height: 320,
        }}
      />
    </div>
  );
};

export default ShalterFess;
