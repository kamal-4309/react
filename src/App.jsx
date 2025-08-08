import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import './App.css'; 
import Home from './component/dashboard/home';
import Students from './component/students/std';
import Attendance from './component/Attendance/attendence';
import Performance from './component/performance/perform';
import FeesDetails from './component/FeesStatus/fees';
import Logout from './component/logout/logout';
import Library from './component/library/lib';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex bg-gradient-to-b from-[#0b0b0d] via-[#100c1c] via-[#1c0f30] to-[#080808]">
        <Navbar />
        <div className="ml-80 w-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Performance" element={<Performance />} />
            <Route path="/FeesDetails" element={<FeesDetails />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Library" element={<Library />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>



  );
};

export default App;

