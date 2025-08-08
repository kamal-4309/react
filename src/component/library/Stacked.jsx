import React from 'react';
import ApexCharts from 'react-apexcharts';

const BooksStackedBarChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '45%',
      },
    },
    xaxis: {
      categories: [
        'Fiction',
        'Science',
        'History',
        'Biography',
        'Technology',
        'Comics'
      ],
      labels: {
        style: {
          fontSize: '13px',
          colors: 'white' 
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 10,
    },
    fill: {
      opacity: 1
    },
    colors: ['#3b82f6', '#10b981'], 
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'white' 
    }
  };

  const seriesData = [
    {
      name: 'Books Issued',
      data: [30, 45, 20, 35, 25, 40]
    },
    {
      name: 'Books Available',
      data: [70, 55, 80, 65, 75, 60]
    }
  ];

  return (
    <div className="bg-transparent p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4">
        Books Issued vs Available per Category
      </h2>
      <ApexCharts
        options={chartOptions}
        series={seriesData}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BooksStackedBarChart;
