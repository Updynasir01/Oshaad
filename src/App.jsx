import {Route,Routes} from "react-router-dom"
import Drinks from "./Pages/Drinks"
import All from "./components/All"
import Booking from "./Pages/Booking"
import Hot from "./Pages/Hot"
import About from "./Pages/About"
import Foods from "./Pages/Foods"
import Dinner from "./Pages/Dinner"
import Lunch from "./Pages/Lunch"
import Contact from "./Pages/Contact"
function App (){
    return <Routes>
        <Route path="/" element={<All />}  ></Route>
        <Route path="/Booking" element={<Booking />}  ></Route>
        <Route path="/Drinks" element={<Drinks />}  ></Route>
        <Route path="/Hotdrinks" element={<Hot />}  ></Route>
        <Route path="/About" element={<About/>}  ></Route>
        <Route path="/Foods" element={<Foods/>}  ></Route>
        <Route path="/Dinner" element={<Dinner/>}  ></Route>
        <Route path="/Lunch" element={<Lunch/>}  ></Route>
        <Route path="/Contact" element={<Contact/>}  ></Route>
        

    </Routes>

  
}
export default App