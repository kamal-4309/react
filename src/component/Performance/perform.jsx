import React from 'react'
import BubbleChart from './Bubble'
import PassFailPieChart from './pie'


const Performance = () => {
  return (
   <>
      <div className='w-full mt-10 '>
       <BubbleChart/>
     </div>
     <div className='mt-10'>
      <PassFailPieChart />

      </div>
    
    </>
  )
}

export default Performance