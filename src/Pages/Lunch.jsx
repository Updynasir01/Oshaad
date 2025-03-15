import abt from "../assets/images/abt.jpg"
import tawook from "../assets/images/dinnerIm/tawook.jpeg"
import Picture1 from "../assets/images/ho/Picture1.jpg"
import Picture2 from "../assets/images/ho/Picture2.png"
import Picture3 from "../assets/images/ho/Picture3.png"
import Picture4 from "../assets/images/ho/Picture4.png"
import Picture6 from "../assets/images/ho/Picture6.png"
import Picture5 from "../assets/images/ho/Picture5.png"
import Picture7 from "../assets/images/ho/Picture7.png"
import Picture8 from "../assets/images/ho/Picture8.png"
import Picture9 from "../assets/images/ho/Picture9.png"
import Picture10 from "../assets/images/ho/Picture10.png"
import Picture11 from "../assets/images/ho/Picture11.png"
import Picture13 from "../assets/images/ho/Picture13.png"
import Picture14 from "../assets/images/ho/Picture14.png"
import Picture15 from "../assets/images/ho/Picture15.png"
import Picture17 from "../assets/images/ho/Picture17.png"
import Picture18 from "../assets/images/ho/Picture18.png"
import Picture19 from "../assets/images/ho/Picture19.png"
import Picture20 from "../assets/images/ho/Picture20.png"
import Picture21 from "../assets/images/ho/Picture21.png"
import Picture22 from "../assets/images/ho/Picture22.jpg"
import Picture23 from "../assets/images/ho/Picture23.png"
import Picture24 from "../assets/images/ho/Picture24.png"
import Picture25 from "../assets/images/ho/Picture25.jpg"
import Picture26 from "../assets/images/ho/Picture26.png"
import Picture27 from "../assets/images/ho/Picture27.jpg"
import Picture28 from "../assets/images/ho/Picture28.png"
import Picture29 from "../assets/images/ho/Picture29.png"
import Picture12 from "../assets/images/ho/Picture12.jpeg"
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
                                            {/* <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={tawook} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Shake<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                                                                                    <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>
                                                                    
                                                                                </div> */}
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture1} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Fish rice<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Delicious fish and rice – a perfect combo</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture2} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">chicken rice<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Classic comfort food: Rice & Chicken! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture3} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Meat rice<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Savory meat and rice – a perfect hearty meal! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture4} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Rice meatball<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Perfect combo: Rice & Meatballs! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture5} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Rice Zab<span className="text-[15px] text-[#5C6574] font-medium " >/ $6.78</span></h6>
                                                                                    <p className="text-[#5C6574]">Perfect combo Flavorfull </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture6} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Rice Curry<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Rich, spicy, and satisfying!  </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture7} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold"> Curry<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Bold flavors in every bite! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture8} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Past F/C/M<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Rich, spicy, and satisfying!  </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture9} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Past alfredo cheese C/F<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Creamy, cheesy, and oh-so-delicious!  </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture10} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Past alfredo cheese Meatball<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Creamy Alfredo & juicy meatballs – the perfect combo! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture11} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Makroni Saldato fish/chicken/Meat<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Sautéed macaroni with your choice of fish, chicken, or meat – a flavorful feast! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture12} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Spaghetti saltata<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Perfectly sautéed spaghetti for a burst of flavor! </p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture13} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Pasta Shrimp<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Delicious pasta paired with succulent shrimp!</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture14} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Makroni chees fish<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.64</span></h6>
                                                                                    <p className="text-[#5C6574]">Creamy mac and cheese with a savory fish twist</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture15} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Makroni cheese shrimps<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Indulgent mac and cheese with juicy shrimp!</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture17} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Pasta Lasagna<span className="text-[15px] text-[#5C6574] font-medium " >/ $6.78</span></h6>
                                                                                    <p className="text-[#5C6574]">Classic and cheesy lasagna pasta – layers of comfort!</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture18} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Slad fish/chicken/Tuuna/Egg<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Fresh salad with your choice of fish, chicken, tuna, or egg – a healthy delight!</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture19} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">shrimp Salad<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Fresh salad with Shrimp</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture20} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Pasta shrimp<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Pasta with Shrimp</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture21} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Chapati Chicken curry<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Chapati Chicken curry</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture22} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Beef  Steak<span className="text-[15px] text-[#5C6574] font-medium " >/ $5.72</span></h6>
                                                                                    <p className="text-[#5C6574]">Best beef steak</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture23} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Coscous F/C/M<span className="text-[15px] text-[#5C6574] font-medium " >/ $5</span></h6>
                                                                                    <p className="text-[#5C6574]">Coscous with your choose, chicken, fish, meat</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture24} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Maize Grits and wheat F/C/M<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.64</span></h6>
                                                                                    <p className="text-[#5C6574]">Maize Grits and wheat with your choose, chicken, fish, meat</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture25} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Shish Tauk<span className="text-[15px] text-[#5C6574] font-medium " >/ $6.43</span></h6>
                                                                                    <p className="text-[#5C6574]">Shish Tauk Yummy!</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture26} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Fruite <span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">Fruite Flavor</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture27} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Sea food <span className="text-[15px] text-[#5C6574] font-medium " >/ $7.15</span></h6>
                                                                                    <p className="text-[#5C6574]">Fruite Flavor</p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture28} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Soor Maraq <span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]"></p>
                                                                    
                                                                                </div>
                                            <div className="h-[300px] p-2  w-[200px]">
                                                                                    <img className="h-[200px] rounded-md w-[170px]  "  src={Picture29} alt="" />
                                                                                    <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Soor iyo maraq F/c/meat ball<span className="text-[15px] text-[#5C6574] font-medium " >/ $4.30</span></h6>
                                                                                    <p className="text-[#5C6574]">soor and maraq with your choose</p>
                                                                    
                                                                                </div>
                                    </div>

                                   </div>
    </div>
}
export default Lunch