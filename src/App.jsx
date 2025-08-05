import React from 'react';
import Navbar from './component/navbar';
import Cards from './component/card';
import Table from './component/table';
import './app.css';
import SchoolAttendanceChart from './chart/line';
import BatchStudentsBarChart from './chart/bar';

const App = () => {
  return (
    <div className="flex">
      <Navbar />

      
{/* cards */}
      <div className="ml-80 w-full p-6 flex flex-col bg-gradient-to-r from-[#1f1c2c] via-[#2c3e50] to-[#000000]">
        <Cards />


{/* charts */}
        <div className="flex gap-6 mt-50">
          <div className="w-full mt-40 flex gap-6 shadow">
            <div className="w-1/2">
              <SchoolAttendanceChart />
            </div>

            
            <div className="w-1/2">
              <BatchStudentsBarChart />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
