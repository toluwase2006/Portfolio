import React from 'react';
import background from '../images (4).jpeg';
import background2 from '../wp9142483.webp';
const Herosection = ({ darkMode }) => {
  return (
    <div className={`relative font-merriweather h-screen transition-all duration-500 ${darkMode ? 'bg-gray-500' : 'bg-gray-900'}`}
      id="home" style={{ background: `url(${darkMode ? background2 : background}) center center/cover no-repeat` }}>
      <div className={`absolute inset-0 ${darkMode ? 'bg-black' : 'bg-white'} opacity-50 z-0`}></div>
      <nav className="flex space-x-6 items-center justify-end pe-10 py-4 w-full absolute z-20">
        <a href="https://github.com/toluwase2006" className="block p-2">
          <i className="fa-brands fa-github text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/toluwaseogundare/" className="block p-2">
          <i className="fa-brands fa-linkedin-in text-3xl"></i>
        </a>
        < a href="mailto:ogundaretoluwase@gmail.com" className="block p-2">
            <i className="fa-solid fa-envelope text-3xl"></i>
        </a>
      </nav>

      <div className='absolute z-10 py-48'>
        <div className='sm:ps-10 ps-5'>
          <h2
            className={`name font-semibold text-2xl sm:text-4xl lg:text-5xl  md:text-4xl slideIn ${darkMode ? 'text-white' : 'text-black'}`}
          >
            I'm Ogundare Toluwase Enoch
          </h2>
          <p className={`occupation font-normal pt-5 text-2xl ${darkMode ? 'text-gray-100' : 'text-black'}`}>
            A Frontend Software Engineer
          </p>
          <a href='#projects'>

          <button className="projectBtn flex items-center justify-center space-x-8 bg-gray-700 text-white py-5 px-5 w-64 mt-24 rounded-lg"
          >
            <p>View My Project</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Herosection;
