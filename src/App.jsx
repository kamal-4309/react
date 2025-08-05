import React from 'react';
import Navbar from './component/navbar';
import Cards from './component/card';
import Table from './component/table';
import './app.css';
import SchoolAttendanceChart from './component/chart';

const App = () => {
  return (
    <div className="flex">
      <Navbar />

<div className="ml-80 w-full p-6 flex flex-col bg-gradient-to-r from-[#1f1c2c] via-[#2c3e50] to-[#000000]">        <Cards />


          {/* table  */}

        <div className="flex gap-6 mt-50">
          <div className="flex-1">
            <Table />
          </div>

          {/* Chart Section */}
          <div className="w-[35%]  mt-40 shadow">
            <SchoolAttendanceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
