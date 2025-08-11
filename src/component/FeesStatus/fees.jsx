import React from 'react'
import PaymentDoughnutChart from './Doughnut';
import BatchWiseFeeBarChart from './bar';
import MonthlyCollectionLineChart from './Line'
const Fees = () => {
  return (
    <>
    <div className='flex m-10  justify-between items-between p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]'>
      <PaymentDoughnutChart />
     
     
      <BatchWiseFeeBarChart />
       </div>
  
      <div className='w-full mt-100 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]'> 
      <MonthlyCollectionLineChart/>
      </div>
      
      
</>
  )
}

export default Fees