import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Apple", "Samsung", "Huawei", "OnePlus"],
    datasets: [
      {
        label: "Market Share",
        data: [30, 25, 20, 25],
        backgroundColor: ["red", "blue", "green", "purple"],
      },
    ],
  };

  return (
    <div style={{backgroundColor:"#dddd" ,height:"200px",width:"200px", marginTop:"10px"}}> 
     <Pie data={data} />
     </div>
  )
};

export default PieChart;
