import React from 'react'
import BubbleChart from './Bubble'
import PassFailPieChart from './pie'
import PerformanceCards from './cards'


const Performance = () => {
  return (
   <>
   <div className=' p-6 rounded-xl flex shadow-[0_4px_20px_#6d16eeff]  mt-10 '>
   <PerformanceCards /> 
   <PassFailPieChart />
   </div>
      <div className=' p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff] w-full mt-10 '>
       <BubbleChart/>
     </div>
    
    </>
  )
}

export default Performance