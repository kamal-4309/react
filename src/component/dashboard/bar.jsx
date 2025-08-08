import React from "react";
import Chart from "react-apexcharts";

export default function BatchStudentsBarChart() {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30px",
        borderRadius: 5,
      },
    },
    colors: ["#6d16eeff"], 
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Batch A", "Batch B", "Batch C", "Batch D", "Batch E",
        "Batch F", "Batch G", "Batch H", "Batch I", "Batch J",
        "Batch K", "Batch L"
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12px",
          fontWeight: 400,
        },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} Students`,
      },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.2)",
    },
  };

  const series = [
    {
      name: "Students",
      data: [25, 39, 65, 45, 79, 80, 69, 63, 60, 66, 90, 78],
    },
  ];

  return (
    <div className="p-4 rounded-lg shadow transparent]">
      <h2 className="text-2xl font-semibold mb-4 text-white">Students per Batch</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
