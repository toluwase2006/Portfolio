import React from 'react'
import SeconndsOfCode from '../Screenshot 2024-10-16 202903.png'
import todo from '../Screenshot 2024-10-16 210055.png'
import Quiz from '../Screenshot 2024-10-21 115409.png'
const Project = ({darkMode}) => {
  const SOC = () => {
    window.location.href = "https://assignmentbootstra-bxh6yepsp-ogundare-toluwase-enochs-projects.vercel.app/"
  }

  const Todo = () => {
    window.location.href = "https://toluwase2006.github.io/to-do-list/"
  }

  const quizApp = () => {
    window.location.href = "https://toluwase2006.github.io/Quiz-App/"
  }
  return (
    <div id='projects' className='pt-24 sm:px-28 font-merriweather'>
      <h2 className='aboutText px-5 font-semibold text-3xl'>Projects</h2>  
      <div className={`mt-10 px-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-14 ${darkMode ? 'text-black' : 'text-black'}`}  data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="2000">
        <div className={`w-full md:w-full sm:w-full  p-10 shadow-2xl rounded-lg cursor-pointer ${darkMode ? 'bg-gray-500 text-white' : 'bg-white'}`} onClick={SOC}>
          <img src={SeconndsOfCode} alt="" />
          <div className='flex items-center space-x-4 justify-center mt-10'>
            <p>HTML</p>
            <div className='w-1 h-4 bg-black'></div>
            <p>BOOTSTRAP</p>
          </div>
        </div>
        <div className={`w-full md:w-full sm:w-full p-10 shadow-2xl rounded-lg cursor-pointer ${darkMode ? 'bg-gray-500 text-white' : 'bg-white'}`} onClick={Todo}>
          <img src={todo} alt="" />
          <div className='flex items-center space-x-4 justify-center mt-10'>
            <p>HTML</p>
            <div className='w-1 h-4 bg-black'></div>
            <p>CSS</p>
            <div className='w-1 h-4 bg-black'></div>
            <p>JS</p>
          </div>
        
        </div>
        <div className={`w-full md:w-full sm:w-full p-10 shadow-2xl rounded-lg cursor-pointer ${darkMode ? 'bg-gray-500 text-white' : 'bg-white'}`} onClick={Todo}>
          <img src={Quiz} alt="" />
          <div className='flex items-center space-x-4 justify-center mt-10'>
            <p>HTML</p>
            <div className='w-1 h-4 bg-black'></div>
            <p>CSS</p>
            <div className='w-1 h-4 bg-black'></div>
            <p>JS</p>
          </div>
        
        </div>
      </div>  
    </div>
  )
}

export default Project
