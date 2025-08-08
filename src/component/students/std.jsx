import React from 'react'
import GenderPieChart from './pie'
import NewAdmissionsBarChart from './bar'
import Table from './table'

const Students = () => {
  return (
    <div>
     <div className="flex gap-6 ">
            <div className="w-full m-10 flex gap-5 shadow">
              <div className="w-1/2">
                <GenderPieChart />
              </div>
              <div className="w-1/2 ">
                <NewAdmissionsBarChart />
              </div>
            </div>
          </div>

               {/* Table */}
           <div className="m-10">
            <Table />
          </div> 

    </div>
  )
}

export default Students