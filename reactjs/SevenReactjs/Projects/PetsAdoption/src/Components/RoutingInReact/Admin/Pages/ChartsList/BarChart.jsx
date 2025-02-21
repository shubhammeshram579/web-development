import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      },
    ],
  };

  return (
    <div style={{width:"300px",height:"200px",backgroundColor:"#ddd",marginTop:"10px"}}>
   <Bar data={data} />
   </div>
)
};

export default BarChart;
