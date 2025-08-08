import React from "react";
import Chart from "react-apexcharts";

export default function SchoolAttendanceChart() {
  const options = {
    chart: {
      height: 400,
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
       background: "transparent"
    },
    colors: ["#3b82f6", "#10b981"], 
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    grid: {
      strokeDashArray: 2,
      borderColor: "rgba(0,0,0,0.1)",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "14px",
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      labels: {
        style: { fontSize: "12px" ,colors: "white"},
      },
    },
    yaxis: {
      max: 100,
      min: 0,
      labels: {
        formatter: (value) => `${value}%`,
        style: { fontSize: "12px" ,colors: "white"},
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}% Attendance`,
      },
    },
  };

  const series = [
    {
      name: "2025 Attendance",
      data: [92, 90, 95, 88, 85, 89, 93, 91, 94, 96, 90, 92],
    },
    {
      name: "2024 Attendance",
      data: [88, 86, 90, 84, 80, 85, 87, 86, 89, 91, 88, 90], 
    },
  ];

  return (
    <div className="p-4 rounded-lg shadow-lg bg-transparent">
      <h2 className=" text-2xl font-semibold mb-4 text-white ">Monthly Attendance </h2>
      <Chart options={options} series={series} type="area" height={360} />
    </div>
  );
}
