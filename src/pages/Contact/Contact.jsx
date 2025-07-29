import React from "react";
import { FaMapMarkedAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-12 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center ">
                        Contact
                    </h2>
                    <div className='text-[#020085] w-[120px] mt-2 mb-6 mx-auto'>
                        <hr className="border-t-2 border-[#666] ml-[15px]" />
                        <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Location */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full border">
                            <FaMapMarkedAlt className="text-blue-900 text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Our Location</h3>
                            <p className="text-gray-600">Shaistaganj, Habiganj</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full border">
                            <FaEnvelope className="text-blue-900 text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email Address</h3>
                            <p className="text-gray-600">shschool1918@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full border">
                            <FaPhone className="text-blue-900 text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Contact</h3>
                            <p className="text-gray-600">01715442678</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
