import React from 'react';
import Chart from 'react-apexcharts';

const PassFailPieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Pass', 'Fail'],
    colors: ['#10B981', '#EF4444'], // Tailwind green and red
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      style: {
        fontSize: '14px'
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`
      }
    }
  };

  const series = [78, 22]; // Example: 78% Pass, 22% Fail

  return (
    <div className="bg-transparent shadow p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Overall Pass vs Fail</h2>
      <Chart options={options} series={series} type="pie" height={300} />
    </div>
  );
};

export default PassFailPieChart;
