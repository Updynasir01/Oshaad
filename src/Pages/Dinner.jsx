import abt from "../assets/images/abt.jpg"
// import straw from "../assets/images/straw.jpg"
// import kuul from "../assets/images/kuul.jpg"
// import xuf from "../assets/images/xuf.jpg"
import wafle from "../assets/images/wafle.jpg"
// import riceM from "../assets/images/riceM.jpg"
import nan from "../assets/images/nan.jpg"
import fishBurger from "../assets/images/dinnerIm/fishburger.jpeg"
import isma from "../assets/images/isma.jpg"
import fruit from "../assets/images/fruit.jpg"
// import eg from "../assets/images/eg.jpg"
import crapes from "../assets/images/dinnerIm/crapes.jpeg"
import meatburger from "../assets/images/dinnerIm/meatburger.jpeg"
import minipizza from "../assets/images/dinnerIm/minipizza.jpeg"
import fishburger from "../assets/images/dinnerIm/fishburger.jpeg"
import frenchtoast from "../assets/images/dinnerIm/frenchtoast.jpeg"
import chips from "../assets/images/dinnerIm/masalachips.jpeg"
import seafood from "../assets/images/dinnerIm/seafood.jpeg"
import chikenwrap from "../assets/images/dinnerIm/chickenwrap.jpeg"
function Dinner (){
    return <div>
        <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
                      style={{ backgroundImage: `url(${abt})` }}>
                    
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-3xl mt-7 font-bold">Dinner</h1>
                      </div>
                
                       </div>
                       <div className="px-24 pt-14">
                       <div className="mt-20 lg:grid lg:grid-cols-5 gap-20 md:grid md:grid-cols-3 grid grid-cols-1">
                        {/* <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={xuf} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Shake<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div> */}
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={wafle} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Wafle<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                        <p className="text-[#5C6574]">A waffle is a crispy, grid-patterned treat</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={crapes} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Crapes<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.50</span></h6>
                                        <p className="text-[#5C6574]">A crêpe is a thin, soft pancake, perfect for sweet or savory fillings.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={nan} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Wafle<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={isma} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Wafle<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={fishBurger} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Wafle<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={fruit} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Fruit<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={meatburger} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Meat Burger<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                        <p className="text-[#5C6574]">A meat burger is a juicy patty in a bun, often with toppings.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={fishburger} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Fish Burger<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                        <p className="text-[#5C6574]">A fish burger is a crispy fish fillet in a bun with toppings.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={minipizza} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">minipizza<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                        <p className="text-[#5C6574]">A mini pizza is a small, tasty pizza with various toppings</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={chips} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Chips masala<span className="text-[15px] text-[#5C6574] font-medium " >/ $3</span></h6>
                                        <p className="text-[#5C6574]">Chips masala is a spicy, flavorful dish made with fried potatoes and rich seasoning.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={chikenwrap} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Chicken Wrap<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                        <p className="text-[#5C6574]">A chicken wrap is a tasty roll filled with chicken, veggies, and sauce.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={frenchtoast} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">French toast<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                        <p className="text-[#5C6574]">French toast is a sweet, golden-brown bread soaked in egg and milk.</p>
                        
                                    </div>
                        <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={seafood} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Seafood<span className="text-[15px] text-[#5C6574] font-medium " >/ $7.15</span></h6>
                                        <p className="text-[#5C6574]">Seafood includes fish, shrimp, crab, and other ocean delicacies.</p>
                        
                                    </div>
                        {/* <div className="h-[300px] p-2  w-[200px]">
                                        <img className="h-[200px] rounded-md w-[170px]  "  src={eg} alt="" />
                                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Wafle<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                        <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                        
                                    </div> */}

                       </div>

                       </div>
                     

    </div>
}
export default Dinner