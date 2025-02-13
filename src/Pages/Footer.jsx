// import { TbHexagonLetterA } from "react-icons/tb";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Group2 from "../assets/images/Group2.png"
import { SlSocialInstagram } from "react-icons/sl";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";

function Footer (){
    return <div className="md:px-28 lg:px-28 px-14 " >
   

     <div className="lg:px-28 md:px-0 relative lg:flex md:flex  gap-28 mt-44 pt-28">
        <div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="w-[90px] h-[45px]  rounded-bl-[50px] rounded-br-[50px] rounded-tl-[3px] rounded-tr-[3px]  bg-[#EA6D27]"></div>
                    <div className="w-[30px] h-[30px] rounded-full absolute -top-4 left-2 -z-10  animated bg-white border-6 border-[#EA6D27]"></div>
                    <div className="w-[20px] h-[20px] rounded-full absolute -top-9 left-8 -z-10 animated  bg-white border-6 border-[#EA6D27]"></div>
                    <div className="w-[18px] h-[18px] rounded-full absolute -top-4 left-12 -z-10 animated  bg-white border-6 border-[#EA6D27]"></div>
                </div>
                <h1 className="text-[30px] font-bold ">Oshaad<span className="text-[#EA6D27]">ToGo</span></h1>
            </div>
            <p className="w-[300px] text-[#5C6574] mt-4 text-[14px]" >Welcome to OshaadToGo! Savor fresh, flavorful dishes in a cozy setting. Perfect for any occasion. Reserve your table today!</p>
            <h6 className="mt-5 font-bold text-[12px]" >OPENING HOURS</h6>
            <p className="mt-5 text-[#5C6574] text-[15px]">Monday - Friday  </p>
            <p className="mt-1 text-[#5C6574] text-[15px]">8:00 am to 9:00 pm  </p>

        </div>
        <div className="flex gap-14">
        <div className="mt-9">
            <h1 className="text-[12px] text-[#101A24] font-bold">NAVIGATION</h1>
            <ul className="text-[#5C6574] text-[15px] ">
                <li className="mt-3">Menu</li>
                <li className="mt-2">About us</li>
                <li className="mt-2">Contact us</li>
                <li className="mt-2">Main dishes</li>
            </ul>
        </div>
        <div className="mt-9">
            <h1 className="text-[12px] text-[#101A24] font-bold">DISHES</h1>
            <ul className="text-[#5C6574] text-[15px] ">
                <li className="mt-3">Salad & Fish</li>
                <li className="mt-2">Malawac & Odkac</li>
                <li className="mt-2">Rice Sab</li>
                <li className="mt-2">Seafood</li>
            </ul>
        </div>
        </div>

        
        <div className="mt-9 md:hidden hidden lg:flex ">
            <h1 className="text-[12px] text-[#101A24] font-bold">FOLLOW US</h1>
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
       
        </div>
        </div>
     <img className="absolute right-2 top-7 " src={Group2} alt="" />
    
     </div>
     <div className="mt-9 lg:hidden md:flex ">
            <h1 className="text-[12px] text-[#101A24] font-bold">FOLLOW US</h1>
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
       
        </div>
        </div>
     
     <div className="mt-4 border-t text-[#EA6D27] border-gray-500 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} OshaadToGo. All rights reserved.</p>
        </div>
        <div className="mt-2 text-[#EA6D27] text-center">
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>

    </div>
}
export default Footer