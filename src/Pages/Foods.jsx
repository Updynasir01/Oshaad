import abt from "../assets/images/abt.jpg"
import { MdOutlineLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { MdBreakfastDining } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Foods (){
    return <div>
         <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
              style={{ backgroundImage: `url(${abt})` }}>
            
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-3xl mt-7 font-bold">Foods</h1>
              </div>
        
               </div>
               <div  className="lg:flex lg:justify-center lg:gap-10 lg:mt-24 md:flex md:justify-center md:gap-10 md:mt-24 grid grid-cols-1 pt-9 px-20 gap-6">
                <div className="w-[180px] h-[180px] pt-7 bg-[#EA6D27] items-center text-center rounded-md  text-white"  >
                    <h1 className="text-3xl font-bold">Break-fast</h1>
                    
                    <MdBreakfastDining className="text-6xl ml-16" />
                </div>
                <NavLink to="/Lunch"> <div className="w-[180px] h-[180px] pt-7 bg-[#EA6D27] items-center text-center rounded-md  text-white"  >
                    <h1 className="text-3xl font-bold">Lunch</h1>
                    
                    <MdOutlineLunchDining className="text-6xl ml-16" />
                </div></NavLink>
                <NavLink to="/Dinner" ><div className="w-[180px] h-[180px] pt-7 bg-[#EA6D27] items-center text-center rounded-md  text-white"  >
                    <h1 className="text-3xl font-bold">Dinner</h1>
                    <MdDinnerDining className="text-6xl ml-16" />
                </div></NavLink>
               
               
               </div>



    </div>
}
export default Foods