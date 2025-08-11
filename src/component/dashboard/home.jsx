import React from 'react'
import Cards from './card';
import Table from '../students/table';

import SchoolAttendanceChart from './line';
import BatchStudentsBarChart from './bar';

const Home = () => {
  return (

    // cards
    <div className="w-full p-6 flex flex-col ">
      <Cards />

      {/* charts */}
      <div className="flex gap-6 mt-40">
        <div className="w-full mt-10 flex gap-5 shadow">
          <div className="w-1/2 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]">
            <SchoolAttendanceChart />
          </div>
          <div className="w-1/2 mt-1 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff] ">
            <BatchStudentsBarChart />
          </div>
        </div>
      </div>

 
    </div>
  );
};


export default Home