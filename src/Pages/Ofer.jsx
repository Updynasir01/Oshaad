import { LuSalad } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { TfiFaceSmile } from "react-icons/tfi";
// import tuun from "../assets/images/tuun.png"
import chef1 from "../assets/images/chef1.png"
function Costumers (){
   
 return  <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-20 lg:pt-24">
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl text-[#EA6D27] david-libre-font font-semibold">Service</h1>
        <h1 className="text-3xl md:text-5xl font-bold w-full lg:w-[350px] david-libre-font mt-2">
          We serve best quality food
        </h1>

        <div className="mt-8 space-y-6">
          <div className="flex items-center p-4 gap-4 bg-[#f3f4f4] rounded-md shadow-sm">
            <LuSalad className="text-3xl text-[#EA6D27]" />
            <div>
              <h1 className="text-sm md:text-base font-semibold">
                Fresh Ingredients, Every Time
              </h1>
              <p className="mt-1 text-xs md:text-sm">
                We prioritize using the freshest, locally-sourced ingredients to ensure every bite bursts with flavor and nutrition.
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 bg-[#f3f4f4] rounded-md shadow-sm">
            <IoRocketOutline className="text-3xl text-[#EA6D27]" />
            <div>
              <h1 className="text-sm md:text-base font-semibold">
                Fast & Reliable Service
              </h1>
              <p className="mt-1 text-xs md:text-sm">
                Your time matters. We guarantee quick preparation and prompt delivery without compromising on quality.
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 bg-[#f3f4f4] rounded-md shadow-sm">
            <TfiFaceSmile className="text-3xl text-[#EA6D27]" />
            <div>
              <h1 className="text-sm md:text-base font-semibold">
                Customer Satisfaction First
              </h1>
              <p className="mt-1 text-xs md:text-sm">
                We’re dedicated to making sure every customer leaves happy. Your feedback helps us improve and serve you better.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <img src={chef1} alt="Chef" className="w-full max-w-sm lg:max-w-md " />
        {/* <img src={tuun} alt="Decoration" className="absolute -top-10 -left-5 h-32 md:h-40 lg:h-48" /> */}
      </div>
    </div>
  </div>
}
export default Costumers