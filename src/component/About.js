import React from 'react'
import myPic from '../toluwase.png'

const About = (darkMode) => {
  return (
      <div className='mt-24 lg:px-24 font-merriweather'>
      <h2 className='aboutText mb-6 px-5 font-semibold text-3xl'>About</h2>
      <div className="flex flex-col-reverse gap-5 px-10 md:flex-row justify-between ">
        <div className="w-full md:w-2/3">
          <p className="text-xl pt-10 sm:text-2xl text-justify sm:text-left">
            I'm a software engineer focused on building profitable websites to help startups and companies grow.I am driven by my passion and love for tech which has been a great part of my journey. Let's create something Remarkable together!
          </p>
          <a href="#projects">
          <button className="projectBtn flex items-center justify-center space-x-8 bg-gray-700 text-white py-5 px-5 w-64 mt-10 rounded-lg">
            <p>View My Project</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          </a>
        </div>
        <img src={myPic} className="w-full h-full sm:w-2/3 sm:h-2/3 rounded-sm object-contain" data-aos="zoom-in-right" data-aos-delay="400" data-aos-duration="1000" alt="A description of the image" />
      </div>

    </div>
  )
}

export default About
