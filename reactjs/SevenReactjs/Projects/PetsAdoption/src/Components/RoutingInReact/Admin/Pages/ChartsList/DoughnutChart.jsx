import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Chrome", "Firefox", "Safari", "Edge"],
    datasets: [
      {
        label: "Browser Usage",
        data: [50, 20, 15, 15],
        backgroundColor: ["orange", "blue", "green", "red"],
      },
    ],
  };

  return (
    <div style={{backgroundColor:"#dddd" ,height:"200px" ,width:"300px" ,marginTop:"10px"}}> 
  <Doughnut data={data} />
  </div>
)
};

export default DoughnutChart;
