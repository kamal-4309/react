import React from "react";

const topPerformers = [
  { name: "kamal", marks: 98 },
  { name: "jana", marks: 96 },
  { name: "Ravi", marks: 94 },
  { name: "sandy", marks: 92 },
  { name: "udhaya", marks: 90 },
];

const TopPerformers = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold text-white mb-4">🏆 Top 5 Performers</h2>
      <div className="space-y-3">
        {topPerformers.map((student, index) => {
          const colors = ["bg-yellow-500", "bg-gray-400", "bg-orange-400", "bg-blue-400", "bg-green-400"];
          return (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`${colors[index]} text-black px-2 py-1 rounded-full text-sm font-bold`}
                >
                  {index + 1}
                </span>
                <span className="text-white font-medium">{student.name}</span>
              </div>
              <span className="text-green-400 font-bold">{student.marks} %</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPerformers;
