import React from 'react'

const Cards = () => {
  return (


    <>
    <h1 className="text-5xl font-bold  text-white mb-6">Dashboard</h1>
    
<div className='flex justify-center items-start space-x-4'>


{/* student */}
<div className="w-64 [perspective:1000px]">
  <div className="w-full shadow-cyan-500 bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg rounded-lg pr-11 px-6 py-10 flex items-center space-x-4 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)]">
    
    <div className="bg-gray-100 p-7 rounded-full flex items-center justify-center [transform:translate3d(0,0,40px)] transition-all duration-500">
      <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
      </svg>
    </div>

    <div className="[transform:translate3d(0,0,40px)] transition-all duration-500">
      <div className="text-xl font-bold text-white-800">400</div>
      <div className="text-sm text-white-500">Total Students</div>
    </div>

  </div>
</div>

{/* batch */}

<div className="w-64 [perspective:1000px]">
  <div className="w-full shadow-cyan-500 bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg rounded-lg pr-11 px-6 py-10 flex items-center space-x-4 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)]">
    
    <div className="bg-gray-100 p-7 rounded-full flex items-center justify-center [transform:translate3d(0,0,40px)] transition-all duration-500">
      <svg  viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-600">
  <path d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
</svg>
    </div>

    <div className="[transform:translate3d(0,0,40px)] transition-all duration-500">
      <div className="text-xl font-bold text-white-800">10</div>
      <div className="text-sm text-white-500"> Batches</div>
    </div>

  </div>
</div>


{/* calender */}


<div className="w-64 [perspective:1000px]">
  <div className="w-full shadow-cyan-500 bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg rounded-lg pr-11 px-6 py-10 flex items-center space-x-4 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)]">
    
    <div className="bg-gray-100 p-7 rounded-full flex items-center justify-center [transform:translate3d(0,0,40px)] transition-all duration-500">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-600">
  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
  <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"  />
</svg>
    </div>

    <div className="[transform:translate3d(0,0,40px)] transition-all duration-500">
      <div className="text-xl font-bold text-white-800">12</div>
      <div className="text-sm text-white-500">Monthly</div>
    </div>

  </div>
</div>


{/* attendence */}

<div className="w-64 [perspective:1000px]">
  <div className="w-full shadow-cyan-500 bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg rounded-lg pr-11 px-6 py-10 flex items-center space-x-4 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)]">
    
    <div className="bg-gray-100 p-7 rounded-full flex items-center justify-center [transform:translate3d(0,0,40px)] transition-all duration-500">
      <svg  viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-600">
  <path fillRule="evenodd" d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"  />
</svg>
    </div>

    <div className="[transform:translate3d(0,0,40px)] transition-all duration-500">
      <div className="text-xl font-bold text-white-800">98.8</div>
      <div className="text-sm text-white-500">Overall Percentage</div>
    </div>

  </div>
</div>




</div>


    </>
  )
}

export default Cards

