import React from 'react'
import RadarChart from './radar'
import BooksStackedBarChart from './Stacked'
const Library = () => {
  return (
    <div>   

      <div className='w-full mt-10 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]'>
       < RadarChart/>
       </div>

       <div className='w-full mt-10 p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]'>
       <BooksStackedBarChart/>
       </div>
    </div>

  )
}

export default Library