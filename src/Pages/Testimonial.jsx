import pan from "../assets/images/pan.png"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import cta from "../assets/images/cta.png"
import SYD from "../assets/images/SYD.jpg"
import ert from "../assets/images/ert.jpg"
import fco from "../assets/images/fco.jpg"
import vbn from "../assets/images/vbn.jpg"
import w from "../assets/images/w.jpg"
import Footer  from "./Footer";


const testimonials = [
  {
    name: 'Abdinasir',
    title: '',
    feedback: '"The food was absolutely amazing! The fresh ingredients, perfect seasoning, and attention to detail in every dish made for an unforgettable dining experience. Each bite was packed with flavor, and I could tell the food was made with care. OshaadToGo truly brings restaurant-quality meals straight to your door. I’ll definitely be ordering again!".',
    image: ert,
  },
  {
    name: 'Dr.kaafi',
    title: '',
    feedback: '"Fast delivery and the flavors were spot on! Every dish was bursting with authentic taste, and you could tell it was made with high-quality ingredients. The convenience of quick delivery paired with such delicious meals makes OshaadToGo stand out. Highly recommend it to anyone looking for a top-notch meal experience!" ',
    image: fco,
  },
  {
    name: 'Muna Miski',
    title: '',
    feedback: '"Incredible service and delicious meals! The quality and taste of the food exceeded my expectations, and the delivery was prompt and seamless. I will definitely be ordering again and recommending OshaadToGo to friends and family!"',
    image: vbn,
  },
  {
    name: 'Abdinasir',
    title: '',
    feedback: '"Incredible service and delicious meals! The quality and taste of the food exceeded my expectations, and the delivery was prompt and seamless. I will definitely be ordering again and recommending OshaadToGo to friends and family!"',
    image: w,
  },
];




function Testimonial (){


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
  


    return <div>
        <div className="bg-[#f3f4f4] relative mt-[60px] h-[1100px] md:h-[890px] lg:h-[910px]">
            <div className="text-center pt-[100px]">
                <h1 className="text-3xl david-libre-font text-[#101A24] font-bold">Our Happy Customers</h1>
                <p className="text-[15px] ml-10  w-[350px] text-center sm:ml-[38%] mt-2 text-[#5C6574]">"Our customers love our fresh, flavorful meals and exceptional service!"</p>
            </div>

    <div className="max-w-lg mx-auto mt-32 md:ml-[8%] lg:ml-[25%] p-4 relative">
  <div className="flex items-center w-full md:w-[700px] justify-between">
    <button onClick={prevSlide} className="p-2 mr-2 bg-gray-200 z-10 rounded-full hover:bg-gray-300">
      <ChevronLeft size={24} />
    </button>
    <div className="relative z-10 bg-white shadow-lg rounded-tl-[60px] rounded-tr-[20px] rounded-br-[60px] rounded-bl-[20px] h-[530px] sm:h-[300px] w-[500px] lg:w-[550px] md:w-[550px] p-6 text-center">
      <img
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].name}
        className="w-24 h-24 rounded-full mx-auto -mt-20 border-4 border-white shadow-md"
      />
      <div className="flex justify-center mt-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-5 h-5" />
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4 px-4">{testimonials[currentIndex].feedback}</p>
      <h3 className="text-lg font-semibold mt-4">{testimonials[currentIndex].name}</h3>
      <p className="text-gray-500  text-sm">{testimonials[currentIndex].title}</p>
    </div>
    <button onClick={nextSlide} className="p-2 ml-2 z-10 bg-gray-200 rounded-full hover:bg-gray-300">
      <ChevronRight size={24} />
    </button>
  </div>

  <div className="flex justify-center md:ml-56 mt-14 space-x-2">
    {testimonials.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          index === currentIndex ? 'bg-[#EA6D27]' : 'bg-gray-300'
        }`}
      ></span>
    ))}
  </div>
</div>




        <img className="absolute top-20  " src={pan} alt="" />
        </div>


      <div className="bg-white relative ">
        

      <div className=" lg:w-[900px] md:-top-28 -top-28   md:left-12 absolute lg:-top-28 lg:left-80 ">

      <div  style={{ backgroundImage: `url(${cta})` }}  className="bg-white bg-opacity-80 p-8   rounded-[30px] shadow-lg text-center md:w-[700px] lg:w-[800px] mx-4">
       
        <p className="text-white text-3xl pt-5 david-libre-font font-semibold mb-6">Subscribing To Our Newsletter</p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full relative h-[60px] px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-[150px] absolute md:right-[50px] md:top-[115px] right-[50px] top-[150px] lg:top-[114px] lg:right-[119px] h-[55px] bg-[#EA6D27] text-white px-4 py-2 rounded-lg hover:bg-[#EA6D27] transition duration-300"
          >
            Subscribe
          </button>
        </form>
        
      </div>

    </div>


    

      </div>
      <div className="mt-[300px]">
            <Footer/>
    </div>
    </div>
}
export default Testimonial