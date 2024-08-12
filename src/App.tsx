import { useState } from 'react'
import './App.css'
import Homepage from './sections/Homepage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './sections/About'
import Experience from './pages/Experience';
import Projects from './pages/Projects';
// import Try from './Components/Try';
const App:React.FC = () => {
  return ( 
    <>
    <Router>
    <div className='text-white bg-black w-[100vw] min-h-[100vh] h-full'>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/experience' element={<Experience />} />
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
