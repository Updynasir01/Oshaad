import abt from "../assets/images/abt.jpg"
function Dinner (){
    return <div>
        <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
                      style={{ backgroundImage: `url(${abt})` }}>
                    
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-3xl mt-7 font-bold">Dinner</h1>
                      </div>
                
                       </div>

    </div>
}
export default Dinner