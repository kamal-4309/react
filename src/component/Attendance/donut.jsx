import React from 'react';
import Chart from 'react-apexcharts';

const DoughnutChart = () => {
  // Attendance categories
  const data = {
    Present: 300,
    Absent: 40,
    'Medical Leave': 35,
    'On Duty': 25
  };

  const labels = Object.keys(data);
  const series = Object.values(data);

  const colors = ['#3B82F6', '#E5E7EB', '#FBBF24', '#10B981']; 

  const options = {
    chart: {
      type: 'donut',
      height: 230,
      width: 230,
      toolbar: { show: false }
    },
    labels,
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '16px',
              offsetY: 10,
              formatter: val => `${val} students`
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '14px',
              formatter: () => `${series.reduce((a, b) => a + b, 0)}`
            }
          }
        }
      }
    },
    stroke: {
      width: 4,
      colors: ['#fff']
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: val => `${val} students`
      }
    },
    grid: {
      padding: {
        top: -10,
        bottom: -10,
        left: -10,
        right: -10
      }
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { width: 200, height: 200 },
          plotOptions: {
            pie: {
              donut: {
                size: '70%'
              }
            }
          }
        }
      }
    ],
    states: {
      hover: {
        filter: { type: 'darken', value: 0.9 }
      },
      active: {
        filter: { type: 'none' }
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Overall Percentage
      </h2>
      <Chart options={options} series={series} type="donut" width={230} height={350} />
      

      {/* Custom Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Legend color="bg-blue-600" label="Present" />
        <Legend color="bg-gray-300" label="Absent" />
        <Legend color="bg-yellow-400" label="Medical Leave" />
        <Legend color="bg-green-500" label="On Duty" />
      </div>
    </div>
  );
};

// Reusable legend item
const Legend = ({ color, label }) => (
  <div className="inline-flex items-center">
    <span className={`w-2.5 h-2.5 ${color} rounded-sm me-2`}></span>
    <span className="text-sm text-white">{label}</span>
  </div>
);

export default DoughnutChart;
