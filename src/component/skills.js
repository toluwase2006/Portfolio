import React from 'react'

const skills = () => {
  return (
    <div  className='pt-24 sm:px-28 font-merriweather'>
      <h2 className='aboutText px-5 font-semibold text-3xl'>Skills</h2>
      <div className='grid px-10 grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-6 mt-5 border-gray-700 p-10 text-left rounded-lg shadow-2xl gap-5'>
        <div className='flex items-center justify-center font-semibold space-x-3  w-full sm:w-24 border-2 border-red-400 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="2000">
            <i className="fa-brands fa-html5 text-2xl text-red-400"></i>
            <p>HTML</p>
        </div>
        <div className='flex items-center justify-center font-semibold space-x-3 w-full sm:w-24  border-2 border-blue-400 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="2000">
            <i className="fa-brands fa-css3-alt text-2xl text-blue-400"></i>
            <p>CSS</p>
        </div>
        <div className='flex items-center justify-center font-semibold space-x-3 w-full sm:w-36  border-2 border-yellow-400 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="400" data-aos-duration="2000">
            <i className="fa-brands fa-js text-2xl text-yellow-400"></i>
            <p>JAVASCRIPT</p>
        </div>
        <div className='flex items-center justify-center font-semibold space-x-3 sm:w-36 w-full  border-2 border-blue-400 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="2000">
             <i className="fa-brands fa-python text-blue-400"></i>
            <p>PHYTON</p>
        </div>
        <div className='flex items-center justify-center space-x-3 font-semibold border-2 sm:w-36 w-full  border-gray-400 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="600" data-aos-duration="2000">
            <i className="fa-brands fa-bootstrap text-gray-400"></i>
            <p>BOOTSTRAP</p>
        </div>
        <div className='flex items-center justify-center space-x-3 font-semibold border-2 sm:w-36 w-full  border-gray-600 text-center py-4 rounded-md' data-aos="zoom-in-right" data-aos-delay="600" data-aos-duration="2000">
            <i className="fa-brands fa-bootstrap text-gray-600"></i>
            <p>REACT JS</p>
        </div>
        <div className='border-2 border-green-400 font-semibold text-center py-4 sm:w-32 w-full  rounded-md' data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="2000">Tailwind CSS</div>
      </div>
    </div>
  )
}

export default skills
