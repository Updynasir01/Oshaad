import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Tijaabo (){
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-[#EA6D27] text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Oshaad<span className="text-black">ToGo</span></h1>

        <ul className="hidden md:flex space-x-8">
          <li className="relative group cursor-pointer">
            <span onClick={() => toggleMenu("foods")} className="flex items-center">
              Foods <FaChevronDown className="ml-1 text-sm" />
            </span>
            {activeMenu === "foods" && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg p-2 space-y-2">
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Main Dishes</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Appetizers</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Desserts</li>
              </ul>
            )}
          </li>

          <li className="relative group cursor-pointer">
            <span onClick={() => toggleMenu("drinks")} className="flex items-center">
              Drinks <FaChevronDown className="ml-1 text-sm" />
            </span>
            {activeMenu === "drinks" && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg p-2 space-y-2">
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Soft Drinks</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Smoothies</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Coffee & Tea</li>
              </ul>
            )}
          </li>

          
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => toggleMenu("mobile")} className="text-white focus:outline-none">
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {activeMenu === "mobile" && (
        <div className="md:hidden bg-white text-black shadow-lg p-4 space-y-4">
          <div>
            <button
              onClick={() => toggleMenu("foods")}
              className="w-full flex justify-between items-center py-2"
            >
              Foods <FaChevronDown className="ml-2" />
            </button>
            {activeMenu === "foods" && (
              <ul className="space-y-2 pl-4">
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Main Dishes</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Appetizers</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Desserts</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMenu("drinks")}
              className="w-full flex justify-between items-center py-2"
            >
              Drinks <FaChevronDown className="ml-2" />
            </button>
            {activeMenu === "drinks" && (
              <ul className="space-y-2 pl-4">
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Soft Drinks</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Smoothies</li>
                <li className="hover:bg-[#EA6D27] hover:text-white p-2 rounded">Coffee & Tea</li>
              </ul>
            )}
          </div>

          <div className="hover:bg-[#EA6D27] hover:text-white p-2 rounded cursor-pointer">About Us</div>
          <div className="hover:bg-[#EA6D27] hover:text-white p-2 rounded cursor-pointer">Contact</div>
        </div>
      )}
    </nav>
  );
};

export default Tijaabo;