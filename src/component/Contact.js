import React from 'react'

const Contact = ({darkMode}) => {
  return (
    <div className='mt-48 sm:px-28 font-merriweather' >
      <h2 className='aboutText px-5 font-semibold text-3xl mb-10' >Contact</h2>  
      <form action="" className='text-center px-10'data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1000" >
        <div className='flex flex-col sm:flex-row gap-4'>
            <input type="text" className={`w-full sm:w-1/2 shadow-lg border-1 py-5 ps-4 rounded-xl border-black ${darkMode ? 'bg-gray-500 placeholder-white' : 'bg-white'}`} placeholder='Your FirstName' required />
            <input type="text" className={`w-full sm:w-1/2 shadow-lg border-1 py-5 ps-4 rounded-xl border-black ${darkMode ? 'bg-gray-500 placeholder-white' : 'bg-white'}`} placeholder='Your LastName' required />
        </div>
        <textarea rows="10" cols="30" name="" id="" placeholder='Your Message' className={`px-4 py-4 mt-10 w-full  rounded-xl shadow-2xl h-36 ${darkMode ? 'bg-gray-500 placeholder-white'  : 'bg-white'}`}></textarea>
        <button className='w-52 my-10 bg-gray-700 py-4 rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
