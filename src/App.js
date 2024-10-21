import './App.css';
import Herosection from './component/Herosection';
import About from './component/About';
import Skills from './component/skills';
import Project from './component/Project';
import Contact from './component/Contact';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-500 text-white' : 'bg-white text-black'} min-h-screen`}>
      {/* Toggle dark mode button */}
      <div
        className="flex items-center px-4 py-3 space-x-4 bg-gray-700 cursor-pointer rounded-xl fixed bottom-10 left-5 z-20"
        onClick={toggleMode}
      >
        <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl text-white`}></i>
      </div>

      <div className="App">
          <Herosection darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills />
          <Project darkMode={darkMode} />
          <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
