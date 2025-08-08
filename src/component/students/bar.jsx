import React from 'react';
import Chart from 'react-apexcharts';

const NewAdmissionsBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      title: {
        text: 'Month',
        style: {
          fontSize: '14px',
          color: '#ffffffff'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Number of Admissions',
        style: {
          fontSize: '14px',
          color: '#dbe0ebff'
        }
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} students`
      }
    },
    colors: ['#6d16eeff'],
    grid: {
      borderColor: '#ffffffff', 
      strokeDashArray: 4,
    }
  };

  const series = [
    {
      name: 'New Admissions',
      data: [35, 42, 50, 39, 61, 70, 55, 48]
    }
  ];

  return (
    <div className="bg-transparent shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">New Admissions  </h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default NewAdmissionsBarChart;
