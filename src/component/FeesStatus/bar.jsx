import React from 'react';
import Chart from 'react-apexcharts';

const BatchWiseFeeBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Batch A', 'Batch B', 'Batch C', 'Batch D', 'Batch E', 'Batch F', 'Batch G'],
      labels: {
        style: {
          fontSize: '14px',
          colors: 'white',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `₹${val / 1000}k`,
        style: {
          fontSize: '14px',
          colors: 'white',
        },
      },
      title: {
        text: 'Fee Collected',
        style: {
          fontSize: '16px',
          color: 'white',
        },
      },
    },
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
    tooltip: {
      y: {
        formatter: (val) => `₹${val.toLocaleString()}`,
      },
    },
  };

  const series = [
    {
      name: 'Fee Collected',
      data: [110000, 135000, 98000, 150000, 87000, 121000, 102000], // Example batch-wise amounts
    },
  ];

  return (
    <div className="bg-transparent shadow p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Batch-wise Fee Collected</h2>
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default BatchWiseFeeBarChart;
