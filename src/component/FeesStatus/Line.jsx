import React from 'react';
import Chart from 'react-apexcharts';

const MonthlyCollectionLineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 400,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      title: {
        text: 'Month',
        style: {
          fontSize: '14px',
          color: 'white',
        },
      },
      labels: {
        style: {
          fontSize: '13px',
          colors: 'white',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Amount Collected (₹)',
        style: {
          fontSize: '14px',
          color: 'white',
        },
      },
      labels: {
        formatter: (value) => `₹${value / 1000}k`,
        style: {
          fontSize: '13px',
          colors: 'white',
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `₹${value.toLocaleString()}`,
      },
    },
    colors: ['#3B82F6'],
    markers: {
      size: 5,
    },
    grid: {
      borderColor: '#E5E7EB',
    },
  };

  const series = [
    {
      name: 'Fee Collected',
      data: [120000, 150000, 100000, 135000, 160000, 140000, 155000, 170000, 150000, 165000, 175000, 180000],
    },
  ];

  return (
    <div className="bg-transparent shadow p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Monthly Fee Collection Trend</h2>
      <Chart options={options} series={series} type="line" height={400} />
    </div>
  );
};

export default MonthlyCollectionLineChart;
