import React from 'react';
import Plot from 'react-plotly.js';

const MultiplePieCharts = () => {
  const data = [
    {
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      name: 'Q1',
      domain: { column: 0 }, // Position in the first column
    },
    {
      values: [10, 40, 50],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      name: 'Q2',
      domain: { column: 1 }, // Position in the second column
    },
  ];

  const layout = {
    title: 'Electricity Consumption by Sector',
    grid: { rows: 1, columns: 2 }, // Create a 1x2 grid for the charts
  };

  return <Plot data={data} layout={layout} />;
};

export default MultiplePieCharts;