import React from 'react'
import PieChart from './pie';
import LineChart from './line';
import DoughnutChart from './donut';
const Attendance = () => {
  return (
  <>
      <div className='p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff] '>
       <LineChart/>
     </div>

     <div className='flex gap-150 ml-20 w-1/2 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]'>
     <PieChart/>
    <div className='mt-15'>
     <DoughnutChart/>
     </div>
    </div>
    </>
  
  )
}

export default Attendance