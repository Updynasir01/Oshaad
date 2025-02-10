import {Route,Routes} from "react-router-dom"
import Drinks from "./Pages/Drinks"
import All from "./components/All"
function App (){
    return <Routes>
        <Route path="/" element={<All />}  ></Route>
        <Route path="/Drinks" element={<Drinks />}  ></Route>
    </Routes>

  
}
export default App