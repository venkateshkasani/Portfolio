import './App.css'
import Homepage from './sections/Homepage';
import { Routes,Route } from 'react-router-dom';

const App:React.FC = () => {
  return ( 
    <>
    <div className='text-white bg-black w-[100vw] min-h-[100vh] h-full'>
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
