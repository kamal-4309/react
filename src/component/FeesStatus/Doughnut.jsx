import React from 'react';
import Chart from 'react-apexcharts';

const PaymentDoughnutChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Paid', 'Pending', 'Scholarship'],
    colors: ['#10B981', '#F59E0B', '#3B82F6'],
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  // Example data (update based on real data)
  const series = [50, 30, 20]; // Paid, Pending, Scholarship

  return (
    <div className="bg-transparent shadow p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Payment Status</h2>
      <Chart options={options} series={series} type="donut" height={350} />
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
        </div>
        <div className="flex items-center gap-2">
        </div>
        <div className="flex items-center gap-2">
        </div>
      </div>
    </div>
  );
};

export default PaymentDoughnutChart;
