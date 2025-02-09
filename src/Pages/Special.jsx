import vector4 from "../assets/images/vector4.png"
import vector5 from "../assets/images/vector5.png"
import dish9 from "../assets/images/dish9.png"
import dish12 from "../assets/images/dish12.png"
import dish44 from "../assets/images/dish44.png"
import dish32 from "../assets/images/dish32.png"
import basal from "../assets/images/basal.png"
import tuun from "../assets/images/tuun.png"
import dish1 from "../assets/images/dish1.png"
// import sharax from "../assets/images/sharax.png"

function Special () {
    return <div className="bg-[#f3f4f4] h-[2500px] md:h-[1700px] sm:h-[1400px]  mt-32 pt-24 ">
        
            <div className=" w-[350px] ml-[10%] sm:ml-[40%]  relative">
                <h1 className="text-[40px] text-[#101A24] david-libre-font font-bold">Our Special Dishes</h1>
                <p className="text-[#5C6574] text-center">At Oshaad To Go, we specialize in <br /> creating unforgettable dining experiences.</p>
                <img className="absolute hidden sm:flex sm:-right-38 -top-12" src={vector4} alt="" />
                <img className="absolute -left-38 sm:-left-52 -top-12" src={vector5} alt="" />
                
            </div>
            

            <div className="sm:px-28 grid relative lg:flex md:grid-cols-2 md:grid   justify-center gap-14 mt-32">
                <div className="w-[225px]  relative p-3 text-center rounded-tl-[50px] mt-24 rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-white  h-[250px] border-2 hover:bg-white">
                <h1 className="bg-[#101A24] absolute -right-4 z-50 -top-10  text-center p-2 h-[40px] w-[40px] text-white text-[13px] font-semibold rounded-full ">$12</h1>
                    <img className="absolute -top-[110px]" src={dish9} alt="" />
                    <img className="absolute -bottom-8  left-[150px]" src={basal} alt="" />
                    <h1 className="text-[17px]  mt-24  font-semibold david-libre-font">Lumpia with Suace</h1>
                    <p className=" text-[#5C6574] text-[14px]">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="w-[225px] relative p-3 text-center rounded-tl-[50px] mt-24 rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-white  h-[250px] border-2 hover:bg-white">
                <h1 className="bg-[#101A24] absolute -right-4 z-50 -top-10  text-center p-2 h-[40px] w-[40px] text-white text-[13px] font-semibold rounded-full ">$12</h1>
                    <img className="absolute -top-[110px]" src={dish32} alt="" />
                    <h1 className="text-[17px]  mt-24  font-semibold david-libre-font">Fish and Veggie</h1>
                    <p className=" text-[#5C6574] text-[14px]">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="w-[225px] relative p-3 text-center rounded-tl-[50px] mt-24 rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-white  h-[250px] border-2 hover:bg-white">
                <h1 className="bg-[#101A24] absolute -right-4 z-50 -top-10  text-center p-2 h-[40px] w-[40px] text-white text-[13px] font-semibold rounded-full ">$12</h1>
                    <img className="absolute -top-[110px]" src={dish44} alt="" />
                    <h1 className="text-[17px]  mt-24  font-semibold david-libre-font">Tofu Chili</h1>
                    <p className=" text-[#5C6574] text-[14px]">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="w-[225px] relative p-3 text-center rounded-tl-[50px] mt-24 rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-white  h-[250px] border-2 hover:bg-white">
                    <h1 className="bg-[#101A24] absolute -right-4 z-50 -top-10  text-center p-2 h-[40px] w-[40px] text-white text-[13px] font-semibold rounded-full ">$12</h1>
                    <img className="absolute  -top-[110px]" src={dish12} alt="" />
                    <img className="absolute -bottom-12  -right-10" src={tuun} alt="" />
                    <h1 className="text-[17px]  mt-24  font-semibold david-libre-font">Egg and Cocumber</h1>
                    <p className=" text-[#5C6574] text-[14px]">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                {/* <img className="absolute -bottom-50" src={sharax} alt="" /> */}
                
            </div>
            
        {/* <div className="flex mt-[100px] items-center">
            <img className="sm:px-28 h-[500px] sm:mt-[200px]" src={dish1} alt="" />
            <div className="w-[500px] relative mt-[210px]">
                <h1 className="text-6xl text-[#101A24] david-libre-font font-bold">Welcome to Our <br /> Restaurant</h1>
                <p className=" w-[310px] mt-3 text-[#5C6574] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="w-28 mt-6 h-12 text-white rounded-tl-lg rounded-br-lg bg-black font-serif">Menu</button>
                <button className="w-36 ml-4 h-12 text-white rounded-tl-lg rounded-br-lg bg-[#EA6D27] font-serif">Book a table</button>
                <img className="absolute -top-[100px] -left-32" src={vector5} alt="" />
            </div>
        </div> */}


<div className="flex flex-col-reverse md:flex-row items-center mt-10 md:mt-20 lg:mt-[100px] px-4 md:px-10 lg:px-20">
                 {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto" src={dish1} alt="Dish" />
  </div>



  {/* Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left relative mt-10 md:mt-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101A24] david-libre-font font-bold">
      Welcome to Our <br /> Restaurant
    </h1>
    <p className="w-full md:w-[310px] mt-3 text-[#5C6574] text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="flex justify-center md:justify-start mt-6">
      <button className="w-28 h-12 text-white rounded-tl-lg rounded-br-lg bg-black font-serif">
        Menu
      </button>
      <button className="w-36 ml-4 h-12 text-white rounded-tl-lg rounded-br-lg bg-[#EA6D27] font-serif">
        Book a table
      </button>
    </div>
    <img className="hidden md:block absolute -top-16 -left-16 lg:-top-[100px] lg:-left-32" src={vector5} alt="" />
  </div>

 
</div>


 </div>
  
}
export default Special