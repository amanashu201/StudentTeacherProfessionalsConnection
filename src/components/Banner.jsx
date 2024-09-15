import React from 'react'
//import Banner from "../..public/Banner.jpg"
function Banner() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className='order-2 md:order-1 w-full md:w1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4x1 font-bold'>
                Hello, welcome to SPTCONN. Explore Your journey smoothly and effective
                <span className='text-error'>  Explore technology with perfect relation</span>
            </h1>
            <p className="text-x1 ">
            SPTCONN helps exposure to both academic and corporate mentors, 
            students tend to develop adaptability. They begin to see the 
            importance of soft skills and technical proficiency in thriving 
            in the corporate world. professionals can inspire students to think
            beyond traditional job roles and explore entrepreneurial ventures or 
            innovation within established companies.
            </p>
            
        
<label className="px-3 py-3 border rounded-md flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow outline-none" placeholder="Email" />
</label>
    </div>
    <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-warning duration-300 cursor-pointer mt-4">Quick Enquiry</button>
    </div>
        <div className='order-1 w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <img src="public/main.jpg "className='px-4'   alt=""/>

        </div>
    </div>
    </>
  )
}

export default Banner 
