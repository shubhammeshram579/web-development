import React from "react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "Population Density",
      data: [
        { x: -74.006, y: 40.7128, r: 10 }, // New York
        { x: -118.2437, y: 34.0522, r: 8 }, // Los Angeles
        { x: 139.6917, y: 35.6895, r: 12 }, // Tokyo
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const options = {
  scales: {
    x: { type: "linear", position: "bottom" },
    y: { type: "linear" },
  },
};

const MapChart = () => <div style={{backgroundColor:"#dddd" ,height:"200px" ,width:"300px", marginTop:"10px"}}><Bubble data={data} options={options} /></div>;

export default MapChart;
