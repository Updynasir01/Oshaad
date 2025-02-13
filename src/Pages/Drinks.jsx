import straw from "../assets/images/straw.jpg"
import isban from "../assets/images/isban.jpg"
import choco from "../assets/images/choco.jpg"
import lin from "../assets/images/lin.jpg"
import papay from "../assets/images/papay.jpg"
import qum from "../assets/images/qum.jpg"
import mango from "../assets/images/mango.jpg"
import apple from "../assets/images/apple.jpg"
import wate from "../assets/images/wate.jpg"
import orange from "../assets/images/orange.jpg"
import lm from "../assets/images/lm.jpg"
import mint from "../assets/images/mint.jpg"
import strawberrym from "../assets/images/strawberrym.jpg"
function Drinks() {
    return <div className="px-24 pt-14">
        <div className="grid justify-center">
        <h1 className="text-3xl textt-[#101A24] david-libre-font font-bold ">Drinks</h1>
        <div className="flex gap-5 text-xl mt-3">
        <h1 className="hover:text-[#EA6D27] " >Cold</h1>
        <h1 className="hover:text-[#EA6D27] " >Hot</h1>
        </div>
       
        </div>
        <div className="mt-20 lg:grid lg:grid-cols-5 gap-10 md:grid md:grid-cols-3 grid grid-cols-1">
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={straw} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Shake<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.30</span></h6>
                <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={choco} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">chocolate shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.30</span></h6>
                <p className="text-[#5C6574]">Creamy, rich, and chocolaty bliss in a glass!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={lin} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">lemon juice<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.25</span></h6>
                <p className="text-[#5C6574]">Tart, refreshing, and full of zest!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={qum} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">coconuts<span className="text-[15px] text-[#5C6574] font-medium " >/$1.15</span></h6>
                <p className="text-[#5C6574]">Sweet, refreshing, and packed with tropical flavor!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={isban} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Spondiao<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.25</span></h6>
                <p className="text-[#5C6574]">A tangy, tropical fruit with a unique sweet-sour taste, often enjoyed fresh or in beverages!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={wate} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Watermelone<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.25</span></h6>
                <p className="text-[#5C6574]">Refreshing and sweet, a cool thirst quencher made with juicy watermelon!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={mango} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Mango shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.30</span></h6>
                <p className="text-[#5C6574]">Sweet, juicy, and tropical—nature's candy!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={papay} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Papaya<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">Sweet, tropical, and vibrant, packed with flavor and nutrients!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={orange} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Orange<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">Citrusy, sweet, and refreshing—packed with vitamin C!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={apple} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Apple<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">Crisp, juicy, and naturally sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={lm} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Lemon Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">A tangy twist on the classic mojito, with fresh lemon, mint, and a fizzy kick!!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={mint} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Mint Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">A refreshing blend of mint, lime, rum, and soda—cool and crisp!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={strawberrym} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$1.25</span></h6>
                <p className="text-[#5C6574]">A fruity twist on the classic, with fresh strawberries, mint, lime, and soda!</p>

            </div>
        </div>

    </div>
}
export default Drinks