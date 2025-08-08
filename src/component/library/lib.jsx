import React from 'react'
import RadarChart from './radar'
import BooksStackedBarChart from './Stacked'
const Library = () => {
  return (
    <div>   

      <div className='w-full'>
       < RadarChart/>

       </div>
       <BooksStackedBarChart/>
    </div>

  )
}

export default Library