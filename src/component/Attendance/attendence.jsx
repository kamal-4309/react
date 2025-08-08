import React from 'react'
import PieChart from './pie';
import LineChart from './line';
import DoughnutChart from './donut';
const Attendance = () => {
  return (
  <>
      <div className='w-full '>
       <LineChart/>
     </div>

     <div className='flex gap-150 ml-20 w-1/2'>
     <PieChart/>
    <div className='mt-15'>
     <DoughnutChart/>
     </div>
    </div>
    </>
  
  )
}

export default Attendance