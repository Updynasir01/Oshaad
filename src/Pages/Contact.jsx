import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import abt from "../assets/images/abt.jpg"
function Contact() {
    return (
        <div>
            {/* Hero Section */}
            <div  className="h-[250px] relative w-full bg-cover p-12 bg-center"
      style={{ backgroundImage: `url(${abt})` }}>
    
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl font-bold">Contact Us</h1>
      </div>

       </div>

            {/* Contact Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600">We'd love to hear from you. Please reach out to us using the information below.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl text-blue-600 mr-3" />
                            <h3 className="text-xl font-semibold">Our Location</h3>
                        </div>
                        <p className="text-gray-600">
                            123 Islamic Street<br />
                            City, State 12345<br />
                            Country
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaPhone className="text-2xl text-blue-600 mr-3" />
                            <h3 className="text-xl font-semibold">Phone Number</h3>
                        </div>
                        <p className="text-gray-600">
                            +1 (123) 456-7890
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-2xl text-blue-600 mr-3" />
                            <h3 className="text-xl font-semibold">Email Address</h3>
                        </div>
                        <p className="text-gray-600">
                            info@oshadogo.com
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaClock className="text-2xl text-blue-600 mr-3" />
                            <h3 className="text-xl font-semibold">Business Hours</h3>
                        </div>
                        <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
