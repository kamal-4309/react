import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    
    <div className="min-h-screen bg-background">    
<div className="fixed left-0 top-0 h-screen shadow-lg w-80 rounded-0xl bg-gradient-to-b from-[#1c0f30] via-[#2a154d] to-[#1e0a2a]

">

         
          {/* menu */}
          <nav className="mt-6">
            <div>

                {/* dashboard */}
              <Link to={"/"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500  " href="#">
                <span className="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792">
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Dashboard</span>
              </Link>

              {/* Students */}
              <Link to={"/Students"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                <span className="text-left">
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen">
                  <path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Students</span>
              </Link>


                {/*Attendance*/}
              <Link to={"/Attendance"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                <span className="text-left">
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1">
                  <path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Attendance</span>
              </Link>


                {/* Performance */}
              <Link to={"/Performance"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
              <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock">
               <path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>
              </svg>                   
                </span>
                <span className="mx-4 text-sm font-normal">Performance</span>
              </Link>

                {/* >Fees Details */} 
              <Link to={"/FeesDetails"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                <span className="text-left">
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>  
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Fees Details</span>
              </Link>

            
                {/*Library */}
              <Link to={"/Library"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                <span className="text-left">
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-big-icon lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/>
                  <path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Library</span>
              </Link>
            </div>
              {/* Logout */}
              <Link to={"/Logout"} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                <span className="text-left">
                 <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/>
                 <path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                 </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Logout</span>
              </Link>



            
          </nav>

            {/* footer */}
        </div>
      </div>
   
  );
};

export default Navbar