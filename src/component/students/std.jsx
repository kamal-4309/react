import React from 'react'
import GenderPieChart from './pie'
import NewAdmissionsBarChart from './bar'
import Table from './table'

const Students = () => {
  return (
    <div>
     <div className="flex gap-6 ">
            <div className="w-full m-10 flex gap-5 shadow">
              <div className="w-1/2  p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff]">
                <GenderPieChart />
              </div>
              <div className="  p-6 rounded-xl shadow-[0_4px_20px_#6d16eeff] w-1/2 ">
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