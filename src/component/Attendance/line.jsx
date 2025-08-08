import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const series = [
    {
      name: 'Attendance',
      data: [350, 370, 340, 360, 380] // Realistic attendance values (out of 400)
    }
  ];

  const options = {
    chart: {
      height: 250,
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'straight',
      width: 4
    },
    xaxis: {
      type: 'category',
      categories: [
        '25 Jul 2025',
        '28 Jul 2025',
        '31 Jul 2025',
        '1 Aug 2025',
        '3 Aug 2025'
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#e8ebf0ff',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        }
      }
    },
    yaxis: {
      min: 300,
      max: 400,
      tickAmount: 5,
      labels: {
        align: 'left',
        style: {
          colors: '#e0e3e9ff',
          fontSize: '12px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        formatter: (value) => `${value}`
      }
    },
    grid: {
      strokeDashArray: 0,
      borderColor: '#e5e7eb',
      padding: { top: -20, right: 0 }
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} students present`
      }
    },
    colors: ['#39ff14']
  };

  return (
    <div className="w-full mx-auto mt-10 bg-transparent p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Daily Average Attendance (Total: 400 Students)
      </h2>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
};

export default LineChart;
