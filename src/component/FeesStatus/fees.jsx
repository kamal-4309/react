import React from 'react'
import PaymentDoughnutChart from './Doughnut';
import BatchWiseFeeBarChart from './bar';
import MonthlyCollectionLineChart from './Line'
const Fees = () => {
  return (
    <>
    <div className='flex m-10'>
      <PaymentDoughnutChart />
      <BatchWiseFeeBarChart />
</div>
      <div className='w-full mt-100'> 
      <MonthlyCollectionLineChart/>
      </div>
      
      
</>
  )
}

export default Fees