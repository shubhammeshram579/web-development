import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ["Strength", "Speed", "Durability", "Agility", "Stamina"],
    datasets: [
      {
        label: "Superhero Stats",
        data: [80, 90, 75, 85, 95],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "red",
      },
    ],
  };

  return (
    <div style={{backgroundColor:"#ddd" ,height:"300px" ,width:"300px", marginTop:"10px"}}>
        <Radar data={data} />;
    </div>
  ) 
  
};

export default RadarChart;
