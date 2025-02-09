import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import All from './components/All'
// import Tijaabo from './Pages/Tijaabo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Tijaabo/> */}
    <All/>
  
  </StrictMode>,
)
