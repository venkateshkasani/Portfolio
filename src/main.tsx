import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
   <BrowserRouter>
    <App />
   <ToastContainer autoClose={2000} />
   </BrowserRouter>
  // {/* </React.StrictMode>, */}
)
