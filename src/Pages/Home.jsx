import view from "../assets/images/view.png"
import dish1 from "../assets/images/dish1.png"
import { SlSocialInstagram } from "react-icons/sl";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import vector2 from "../assets/images/Vector2.png"
import Vector1 from "../assets/images/Vector1.png"
import vector3 from "../assets/images/vector3.png"
import logo from "../assets/images/logo.jpg"
import logo2 from "../assets/images/logo2.jpg"
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
function Home(){
    const [activeMenu, setActiveMenu] = useState(null);
    const [Open ,setOpen ]=useState(false)
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
      };


 
   return  <div className="px-4 sm:px-8 md:px-16 lg:px-28 relative pt-4 sm:pt-6 md:pt-8 lg:pt-10">
  <div>
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-4  md:gap-8">
          <img className="h-10 hidden sm:block" src={logo} alt="Logo" />
          <img className="h-12 sm:hidden" src={logo2} alt="Logo" />

          <h1 className="text-xl md:text-2xl font-bold hidden sm:block">
            Oshaad <span className="text-[#EA6D27]">ToGo</span>
          </h1>
          <HiOutlineBars3BottomRight onClick={handleOpen}   style={{display : Open == true? "none" :""  }} className="sm:hidden absolute right-9  text-3xl md:text-4xl" />
          <IoMdClose onClick={handleClose}  style={{display : Open == true? "block" :""  }}  className="sm:hidden hidden absolute right-9  text-3xl md:text-4xl"/>
        </div>
      </div>

      <div >
        <ul  style={{display :Open ==true? "block" :""  }} className="hidden absolute sm:top-0  top-14 right-4 transition-all duration-500 bg-white shadow-lg rounded-lg p-5 z-50 animate-slide-in   ">
        {/* <li className="py-2 sm:py-0 cursor-pointer hover:text-[#EA6D27] transition-colors flex duration-300"> </li> */}
        <li className="relative group cursor-pointer">
            <span onClick={() => toggleMenu("foods")} className="flex  items-center">
              Menu <FaChevronDown className="ml-1 mt-1 text-sm" />
            </span>
            {activeMenu === "foods" && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg p-2 space-y-2">
                {/* <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Main Dishes</li> */}
                <li className="hover:text-[#EA6D27]  p-2 rounded">Foods</li>
           <NavLink to="/Drinks"> <li className="hover:text-[#EA6D27]  p-2 rounded">Drinks</li> </NavLink> 
              </ul>
            )}
          </li>
        {/* <li className="py-2 sm:py-0 cursor-pointer hover:text-[#EA6D27] transition-colors duration-300">Events</li> */}
        <li className="py-2 sm:py-0 cursor-pointer hover:text-[#EA6D27] transition-colors duration-300">Gallery</li>
        <li className="py-2 sm:py-0 cursor-pointer hover:text-[#EA6D27] transition-colors duration-300">About</li>
        <li className="py-2 sm:py-0 cursor-pointer hover:text-[#EA6D27] transition-colors duration-300">Contact</li>
        </ul>
        <ul  className="hidden  sm:flex gap-4 md:gap-8 font-sans">
           <li className="relative group cursor-pointer">
            <span onClick={() => toggleMenu("foods")} className="flex  items-center">
              Menu <FaChevronDown className="ml-1 mt-1 text-sm" />
            </span>
            {activeMenu === "foods" && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg p-2 space-y-2">
                {/* <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Main Dishes</li> */}
                <li className="hover:text-[#EA6D27]  p-2 rounded">Foods</li>
               <NavLink to="/Drinks"> <li className="hover:text-[#EA6D27]  p-2 rounded">Drinks</li></NavLink>
              </ul>
            )}
          </li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <button className="hidden sm:block w-32 md:w-36 h-12 md:h-14 text-white rounded-tl-lg md:rounded-tl-xl rounded-br-lg md:rounded-br-xl bg-[#EA6D27] font-serif">
        Book a table
      </button>
    </div>

    <div className="mt-20 md:mt-32 flex flex-col lg:flex-row justify-between items-center">
      <div className="max-w-lg mt-10 lg:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#101A24] font-bold font-serif">
          We provide the best food for you
        </h1>
        <p className="mt-4 text-[#5C6574] text-base md:text-lg">
          Welcome to OshaadToGo! Savor fresh, flavorful dishes in a cozy setting. Perfect for any occasion. Reserve your table today!
        </p>
        <div className="mt-6 flex gap-4">
          <button className="w-28 h-12 text-white rounded-tl-lg rounded-br-lg bg-black font-serif">Menu</button>
          <button className="w-36 h-12 text-white rounded-tl-lg rounded-br-lg bg-[#EA6D27] font-serif">Book a table</button>
        </div>
        <div className="flex mt-10 gap-4 items-center">
          <div className="w-8  hover:border-[#EA6D27] h-8 flex items-center justify-center rounded-full border">
           <a href="https://www.facebook.com/profile.php?id=61552165538772"> <GrFacebookOption className="text-sm " /> </a>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border">
            <a href="https://www.tiktok.com/@oshaad_to_go?_t=ZM-8tiqcFj1nin&_r=1"><IoLogoTiktok className="text-sm" /></a>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border">
           <a href="https://www.instagram.com/oshaadtogo__?igsh=d3FxdTNudzlzcHFr"> <SlSocialInstagram className="text-sm" /> </a>
          </div>
          <div className="border-t w-32 border-gray-200 ml-4"></div>
        </div>
      </div>

      <div className="relative mt-10 lg:mt-0">
        <img className="rounded-tl-[70px] rounded-br-[70px] rounded-bl-2xl rounded-tr-2xl hidden sm:block" src={view} alt="Restaurant view" />
        <img className="absolute bottom-4 -left-20 hidden sm:block" src={dish1} alt="Dish" />
        <img className="absolute -top-24 -left-36 -z-10 opacity-10" src={Vector1} alt="Decoration vector" />
        <img className="absolute -top-24 -right-24 -z-10 opacity-10" src={vector2} alt="Decoration vector" />
        <img className="absolute bottom-4 -right-24 -z-10 opacity-45" src={vector3} alt="Decoration vector" />
      </div>
    </div>
  </div>

  <div className="w-[480px] md:w-[720px] lg:w-[960px] absolute -top-[300px] md:-top-[400px] lg:-top-[428px] -z-20 border-[#D9D9D9] -left-[250px] md:-left-[350px] lg:-left-[450px] rounded-full h-[480px] md:h-[720px] lg:h-[960px] border"></div>
  <div className="w-[480px] md:w-[720px] lg:w-[960px] absolute -top-[320px] md:-top-[420px] lg:-top-[452px] -z-20 border-[#D9D9D9] -left-[280px] md:-left-[400px] lg:-left-[538px] rounded-full h-[480px] md:h-[720px] lg:h-[960px] border"></div>
  <div className="w-[480px] md:w-[720px] lg:w-[960px] absolute -top-[280px] md:-top-[380px] lg:-top-[353px] -z-20 border-[#D9D9D9] -left-[320px] md:-left-[450px] lg:-left-[604px] rounded-full h-[480px] md:h-[720px] lg:h-[960px] border"></div>
</div>

}
          
export default Home