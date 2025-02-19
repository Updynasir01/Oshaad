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
import appl from "../assets/images/appl.jpg"
import lm from "../assets/images/lm.jpg"
import latous from "../assets/images/latous.jpg"
import oreo from "../assets/images/oreo.jpg"
import banana from "../assets/images/banana.jpg"
import carmel from "../assets/images/carmel.jpg"
import blueberry from "../assets/images/blueberry.jpg"
import mint from "../assets/images/mint.jpg"
import peach from "../assets/images/peach.jpg"
import cocnut from "../assets/images/coconut.jpg"
import milk from "../assets/images/milk.jpg"
import green from "../assets/images/green.jpg"
import beet from "../assets/images/beet.jpg"
import vimto from "../assets/images/vimto.jpg"
import carrot from "../assets/images/carrot.jpg"
import passion from "../assets/images/passion.jpg"
import man from "../assets/images/man.jpg"
import strawberrym from "../assets/images/strawberrym.jpg"
import { NavLink } from "react-router-dom"
function Drinks() {
    return <div className="px-24 pt-14">
        <div className="grid justify-center">
        <h1 className="text-3xl textt-[#101A24] david-libre-font font-bold ">Cold Drinks</h1>
        <div className="flex gap-5 text-xl mt-3">
        <h1 className="hover:text-[#EA6D27] " >Cold</h1>
        <NavLink to="/Hotdrinks"><h1 className="hover:text-[#EA6D27] " >Hot</h1></NavLink>
        </div>
       
        </div>
        <div className="mt-20 lg:grid lg:grid-cols-5 gap-20 md:grid md:grid-cols-3 grid grid-cols-1">
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={straw} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Shake<span className="text-[15px] text-[#5C6574] font-medium " >/ $2.40</span></h6>
                <p className="text-[#5C6574]">Creamy, fruity, and perfectly sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={choco} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">chocolate shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">Creamy, rich, and chocolaty bliss in a glass!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={lin} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">lemon juice<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                <p className="text-[#5C6574]">Tart, refreshing, and full of zest!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={qum} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Vanilla Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">Sweet, refreshing, and packed with tropical flavor!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={isban} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Spondiao<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                <p className="text-[#5C6574]">A tangy, tropical fruit with a unique sweet-sour taste, often enjoyed fresh or in beverages!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={wate} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Watermelone<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                <p className="text-[#5C6574]">Refreshing and sweet, a cool thirst quencher made with juicy watermelon!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={mango} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Mango juice<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">Sweet, juicy, and tropical—nature's candy!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={papay} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Papaya<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">Sweet, tropical, and vibrant, packed with flavor and nutrients!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={orange} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Orange<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">Citrusy, sweet, and refreshing—packed with vitamin C!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={apple} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Apple<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">Crisp, juicy, and naturally sweet!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={lm} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Lemon Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A tangy twist on the classic mojito, with fresh lemon, mint, and a fizzy kick!!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={mint} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Mint Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A refreshing blend of mint, lime, rum, and soda—cool and crisp!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={strawberrym} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Strawberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A fruity twist on the classic, with fresh strawberries, mint, lime, and soda!</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={appl} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Apple MOjito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A refreshing blend of mint, lime, apple juice, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={banana} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Banana Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">A smooth mix of fresh banana, mint, lime, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={blueberry} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Blueberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A refreshing blend of blueberries, mint, lime, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={latous} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Latous Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">A unique twist with fresh lettuce, mint, lime, and soda, served over ice</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={oreo} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Oreo Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]"> A creamy blend of Oreos, milk, and ice cream, topped with whipped cream. </p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={passion} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Passion Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]"> A tropical mix of passion fruit, mint, lime, and soda, served over ice. </p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={peach} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Peach MOjito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]"> A refreshing blend of peach, mint, lime, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={carmel} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Carmel Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">A creamy blend of caramel, ice cream, and milk, topped with whipped cream</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={cocnut} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Coconut<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">A smooth blend of coconut, ice cream, and milk, topped with whipped cream</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={vimto} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Roseberry Mojito<span className="text-[15px] text-[#5C6574] font-medium " >/$2.35</span></h6>
                <p className="text-[#5C6574]">A fragrant blend of rose and raspberry, mint, lime, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={milk} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Milk Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">A creamy blend of milk and ice cream, available in various flavors.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={beet} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Beetroot<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">A unique mix of fresh beetroot, mint, lime, and soda, served over ice.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={carrot} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Carrot<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">A fresh blend of carrot, mint, lime, and soda, served over ice</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={green} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Carrot<span className="text-[15px] text-[#5C6574] font-medium " >/$1.50</span></h6>
                <p className="text-[#5C6574]">A refreshing chilled brew of green tea, served over ice with a hint of lemon.</p>

            </div>
            <div className="h-[300px] p-2  w-[200px]">
                <img className="h-[200px] rounded-md w-[170px]  "  src={man} alt="" />
                <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Man Shake<span className="text-[15px] text-[#5C6574] font-medium " >/$2.40</span></h6>
                <p className="text-[#5C6574]">A creamy blend of ripe mango, ice cream, and milk, topped with whipped cream.</p>

            </div>
        </div>

    </div>
}
export default Drinks