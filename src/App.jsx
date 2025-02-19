import {Route,Routes} from "react-router-dom"
import Drinks from "./Pages/Drinks"
import All from "./components/All"
import Booking from "./Pages/Booking"
import Hot from "./Pages/Hot"
function App (){
    return <Routes>
        <Route path="/" element={<All />}  ></Route>
        <Route path="/Booking" element={<Booking />}  ></Route>
        <Route path="/Drinks" element={<Drinks />}  ></Route>
        <Route path="/Hotdrinks" element={<Hot />}  ></Route>

    </Routes>

  
}
export default App