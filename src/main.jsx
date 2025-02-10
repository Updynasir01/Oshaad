import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import All from './components/All'
import Drinks from './Pages/Drinks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Drinks/>
    {/* <All/> */}
  
  </StrictMode>,
)
