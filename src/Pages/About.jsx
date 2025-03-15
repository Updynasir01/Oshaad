import abt from "../assets/images/abt.jpg"
function About (){
    return <div>
       <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
      style={{ backgroundImage: `url(${abt})` }}>
    
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl font-bold">About Us</h1>
      </div>

       </div>

       {/* About Content Section */}
       <div className="max-w-6xl mx-auto px-4 py-12">
         <div className="grid md:grid-cols-2 gap-8 items-center">
           <div>
             <h2 className="text-3xl font-bold mb-4">Our Story</h2>
             <p className="text-gray-600 mb-4">
               Welcome to OshaadToGo, your premier destination for authentic Islamic products and services. 
               Founded with a vision to serve the Muslim community, we strive to provide high-quality products 
               that meet the spiritual and practical needs of our customers.
             </p>
             <p className="text-gray-600">
               Our journey began with a simple idea: to make Islamic products accessible to everyone, 
               regardless of their location. Today, we're proud to serve customers worldwide with our 
               carefully curated selection of products.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-lg">
             <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
             <p className="text-gray-600 mb-4">
               To provide authentic, high-quality Islamic products while maintaining the highest standards 
               of customer service and satisfaction.
             </p>
             <h3 className="text-xl font-semibold mb-4">Our Values</h3>
             <ul className="list-disc list-inside text-gray-600 space-y-2">
               <li>Authenticity in all our products</li>
               <li>Customer satisfaction</li>
               <li>Quality assurance</li>
               <li>Community service</li>
               <li>Ethical business practices</li>
             </ul>
           </div>
         </div>
       </div>
    </div>
}
export default About