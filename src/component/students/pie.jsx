import React from 'react';
import Chart from 'react-apexcharts';

const GenderPieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Male', 'Female', 'Other'],
    colors: ['#3B82F6', '#EC4899', '#10B981'], 
    legend: {
      position: 'bottom',
      labels: {
        colors: '#ffffffff', 
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => `${val.toFixed(1)}%`,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} students`,
      },
    },
  };

  const series = [120, 95, 10]; 

  return (
    <div className="bg-transparent shadow p-6 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Gender </h2>
      <Chart options={options} series={series} type="pie" width="100%" height={360} />
    </div>
  );
};

export default GenderPieChart;
