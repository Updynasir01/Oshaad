import { NavLink } from "react-router-dom"
import latte from "../assets/images/latte.jpg"
import cappu from "../assets/images/cappu.jpg"
import cortado from "../assets/images/Cortado.jpg"
import ISL from "../assets/images/ISL.jpg"
import machiato from "../assets/images/machiato.jpg"
import IL from "../assets/images/IL.jpg"
import espre from "../assets/images/espre.jpg"
import HC from "../assets/images/HC.jpg"
import green from "../assets/images/green.jpg"
import Emc from "../assets/images/Emc.jpg"
import karak from "../assets/images/karak.jpg"
import masala from "../assets/images/masala.jpg"
import qah from "../assets/images/qah.jpg"
import som from "../assets/images/som.jpg"
import camel from "../assets/images/camel.jpg"
import gtea from "../assets/images/gtea.jpg"
import nom from "../assets/images/nom.jpg"
function Hot (){
    return < div className="px-24 pt-14">
          <div className="grid justify-center">
        <h1 className="text-3xl textt-[#101A24] david-libre-font font-bold ">Hot Drinks</h1>
        <div className="flex gap-5 text-xl mt-3">
        <NavLink to="/Drinks"><h1 className="hover:text-[#EA6D27] " >Cold</h1></NavLink>
        <NavLink to="/Hotdrinks"><h1 className="hover:text-[#EA6D27] " >Hot</h1></NavLink>
        </div>

            
    </div>

    <div className="mt-20 lg:grid lg:grid-cols-5 gap-14 md:grid md:grid-cols-3 grid grid-cols-1">

         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={latte} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Coffe Latte<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Smooth, creamy, and perfectly balanced</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={cappu} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Cappuccino<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Bold, rich, and topped with velvety foam.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={cortado} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Cortado<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Smooth, strong, and perfectly balanced with milk.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={machiato} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Machiato<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Bold espresso with a hint of velvety milk.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={ISL} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Ice Spanish Latte<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Smooth, sweet, and refreshingly creamy.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={IL} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Ice Latte<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Chilled, smooth, and perfectly balanced.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={HC} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Hot Chocolate<span className="text-[15px] text-[#5C6574] font-medium " >/ $2</span></h6>
                        <p className="text-[#5C6574]">Rich, creamy, and indulgently warm.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={Emc} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Espresso With Milk<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Bold espresso, softened with creamy milk.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={green} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Green Ice Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Green iced tea is refreshing and crisp.</p>
        
                    </div>
         <div className="h-[300px] p-2  w-[200px]">
                        <img className="h-[200px] rounded-md w-[170px]  "  src={espre} alt="" />
                        <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Espresso<span className="text-[15px] text-[#5C6574] font-medium " >/ $1.50</span></h6>
                        <p className="text-[#5C6574]">Espresso is strong, rich, and full of flavor.</p>
        
                    </div>

    </div>
    <div className="mt-24">
        <h1 className="text-4xl text-center font-bold david-libre-font">Tea</h1>
        <div className="mt-20 lg:grid lg:grid-cols-5 gap-14 md:grid md:grid-cols-3 grid grid-cols-1">
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={masala} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Masala Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Masala tea is spicy, warm, and aromatic.!</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={karak} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">karak Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Karak tea is bold, creamy, and spiced.</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={qah} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">kahwa<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Kahwa is fragrant, warm, and soothing.</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={som} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Somali Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Somali tea is spiced, milky, and comforting.</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={camel} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Camel Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Camel tea is rich, creamy, and nutritious.</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={nom} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Tea is warm, soothing, and refreshing.</p>
            
                        </div>
              <div className="h-[300px] p-2  w-[200px]">
                            <img className="h-[200px] rounded-md w-[170px]  "  src={gtea} alt="" />
                            <h6 className="text-[#101A24] mt-2 text-[16px] font-bold">Green Tea<span className="text-[15px] text-[#5C6574] font-medium " >/ $1</span></h6>
                            <p className="text-[#5C6574]">Green tea is light, fresh, and revitalizing.</p>
            
                        </div>

        </div>
    </div>
  

   </div>
}
 export default Hot