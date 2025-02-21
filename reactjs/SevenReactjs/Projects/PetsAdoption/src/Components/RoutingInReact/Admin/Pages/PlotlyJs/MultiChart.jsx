import React from "react";
import Plot from "react-plotly.js";

const MultiChart = () => {
  // X-axis labels (categories)
  const xArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Y-axis values (Bar Chart Data)
  const salesData = [40, 60, 75, 90, 120, 150];
  const profitData = [20, 35, 50, 60, 80, 100];

  // Y-axis values (Line Chart Data)
  const revenueData = [60, 95, 125, 150, 200, 250];

  return (
    <div style={{ backgroundColor: "#111", padding: "20px",margin:"10px", width:"1100px" }}>
      <Plot
        data={[
          {
            x: xArray,
            y: salesData,
            type: "bar",
            name: "Sales",
            marker: { color: "#36a2eb" }, // Blue bars
          },
          {
            x: xArray,
            y: profitData,
            type: "bar",
            name: "Profit",
            marker: { color: "#ff6384" }, // Red bars
          },
          {
            x: xArray,
            y: revenueData,
            type: "scatter", // Line chart
            mode: "lines+markers",
            name: "Revenue",
            line: { color: "#ffce56", width: 3 },
            marker: { size: 6 },
          },
        ]}
        layout={{
          title: { text: "Sales, Profit & Revenue", font: { color: "#fff" } },
          barmode: "group", // Stacks the bars side by side
          paper_bgcolor: "#111", // Background color
          plot_bgcolor: "#222",
          font: { color: "#fff" }, // Text color
          xaxis: { title: "Months" },
          yaxis: { title: "Amount ($)" },
          width: 1000, height: 440,
        }}
      />
    </div>
  );
};

export default MultiChart;
