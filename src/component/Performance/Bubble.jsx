import React from 'react';
import Chart from 'react-apexcharts';

const BubbleChart = () => {
  const options = {
  chart: {
    height: 350,
    type: 'bubble',
    toolbar: { show: false }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    title: { text: 'Score (%)', style: { color: '#FFFFFF' } },
    min: 0,
    max: 100,
    labels: {
      style: { colors: '#FFFFFF' }
    }
  },
  yaxis: {
    title: { text: 'Attendance (%)', style: { color: '#FFFFFF' } },
    min: 0,
    max: 100,
    labels: {
      style: { colors: '#FFFFFF' }
    }
  },
  tooltip: {
    y: {
      formatter: (val) => `${val}% Attendance`
    },
    x: {
      formatter: (val) => `${val}% Score`
    },
    z: {
      formatter: (val) => `${val}% Participation`
    }
  },
  colors: ['#3B82F6', '#10B981', '#F59E0B']
};

  const series = [
    {
      name: 'Student A',
      data: [{ x: 85, y: 90, z: 60 }]
    },
    {
      name: 'Student B',
      data: [{ x: 75, y: 70, z: 40 }]
    },
    {
      name: 'Student C',
      data: [{ x: 95, y: 98, z: 90 }]
    },
    {
      name: 'Student D',
      data: [{ x: 60, y: 65, z: 30 }]
    }
  ];

  return (
    <div className="bg-transparent p-6 shadow rounded-lg w-full  mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">Score vs Attendance vs Participation</h2>
      <Chart options={options} series={series} type="bubble" height={350} />
    </div>
  );
};

export default BubbleChart;
