import abt from "../assets/images/abt.jpg"
import tawook from "../assets/images/dinnerIm/tawook.jpeg"
function Lunch (){
    return <div>
             <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
                                  style={{ backgroundImage: `url(${abt})` }}>
                                
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="relative z-10 flex items-center justify-center h-full">
                                    <h1 className="text-white text-3xl mt-7 font-bold">Lunch</h1>
                                  </div>
                            
                                   </div>
                                   <div className="px-24 pt-14">
                                    <div className="mt-20 lg:grid lg:grid-cols-5 gap-20 md:grid md:grid-cols-3 grid grid-cols-1">
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={tawook} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Shake<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                                                                    <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                                                                    
                                                                                </div>
                                    </div>

                                   </div>
    </div>
}
export default Lunch