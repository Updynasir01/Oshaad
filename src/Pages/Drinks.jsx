import straw from "../assets/images/straw.jpg"
import choco from "../assets/images/choco.jpg"
import lin from "../assets/images/lin.jpg"
import qum from "../assets/images/qum.jpg"
function Drinks() {
    return <div className="px-28 pt-14">
        <div className="grid justify-center">
        <h1 className="text-3xl textt-[#101A24] david-libre-font font-bold ">Drinks</h1>
        <div className="flex gap-5 text-xl mt-3">
        <h1 className="hover:text-[#EA6D27] " >Cold</h1>
        <h1 className="hover:text-[#EA6D27] " >Hot</h1>
        </div>
       
        </div>
        <div className="mt-20 lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 grid grid-cols-1">
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={straw} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/ 6.00</span></h6>
                <p className="text-[#5C6574]">Minty, fruity, and refreshingly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={choco} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">chocolate shake<span className="text-[15px] text-[#5C6574] font-medium " >/ 6.00</span></h6>
                <p className="text-[#5C6574]">Minty, fruity, and refreshingly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={lin} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">lemon<span className="text-[15px] text-[#5C6574] font-medium " >/ 6.00</span></h6>
                <p className="text-[#5C6574]">Minty, fruity, and refreshingly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={qum} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">coconat<span className="text-[15px] text-[#5C6574] font-medium " >/ 6.00</span></h6>
                <p className="text-[#5C6574]">Minty, fruity, and refreshingly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={straw} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/ 6.00</span></h6>
                <p className="text-[#5C6574]">Minty, fruity, and refreshingly sweet!</p>

            </div>
        </div>

    </div>
}
export default Drinks