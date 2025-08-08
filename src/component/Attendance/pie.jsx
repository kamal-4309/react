import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const series = [73, 58, 92, 67, 110]; 

  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Batch A', 'Batch B', 'Batch C', 'Batch D', 'Batch E'],
    colors: [
      '#3B82F6', 
      '#10B981', 
      '#F59E0B', 
      '#EF4444', 
      '#8B5CF6', 
    ],
    dataLabels: {
      formatter: (val) => `${val.toFixed(1)}%`,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
    legend: {
      position: 'bottom',
      fontSize: '14px',
      fontWeight: 500,
      labels: {
        colors: ['#111'], 
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Students`,
      },
    },
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-transparent p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Batch-wise Student Distribution
      </h2>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
