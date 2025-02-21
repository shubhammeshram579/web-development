import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Scores",
        data: [10, 20, 30, 40, 50],
        backgroundColor: ["red", "blue", "green", "yellow", "purple"],
      },
    ],
  };

  return (
    <div style={{backgroundColor:"#dddd" ,height:"300px" ,width:"300px",marginTop:"10px"}}>
        <PolarArea data={data} />;
    </div>
  ) 
  
};

export default PolarAreaChart;
