import React from 'react';
import ApexCharts from 'react-apexcharts';

const RadarChart = () => {
  const chartOptions = {
    chart: {
      type: 'radar',
      height: 350,
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.2
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 4
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#e5e7eb',
          connectorColors: '#e5e7eb'
        }
      }
    },
    xaxis: {
      categories: [
        'Fiction',
        'Science',
        'History',
        'Comics',
        'Biography',
        'Technology',
        'Poetry',
        'Travel'
      ],
      labels: {
        style: {
          colors: '#ffffffff',  
          fontSize: '13px'
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        useSeriesColors: false
      }
    },
    colors: ['#3b82f6', '#f59e0b'],
    yaxis: {
      show: false
    },
    grid: {
      padding: {
        top: -20,
        bottom: -20
      }
    }
  };

  const seriesData = [
    {
      name: 'Student A',
      data: [40, 60, 75, 50, 65, 80, 30, 55]
    },
    {
      name: 'Student B',
      data: [55, 45, 60, 70, 50, 40, 60, 50]
    }
  ];

  return (
    <div className="bg-transparent p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-white  mb-4">
        Book Reading Comparison Across Categories
      </h2>
      <ApexCharts
        options={chartOptions}
        series={seriesData}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default RadarChart;
