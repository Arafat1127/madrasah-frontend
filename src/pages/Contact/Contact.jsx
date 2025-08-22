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
                            <p className="text-gray-600">Damurhuda , Chuadanga 7220</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full border">
                            <FaEnvelope className="text-blue-900 text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email Address</h3>
                            <p className="text-gray-600">damurhudads78@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full border">
                            <FaPhone className="text-blue-900 text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Contact</h3>
                            <p className="text-gray-600">01309115420</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-12 max-w-6xl mx-auto px-4">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">
                        Find Us on Map
                    </h3>
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9794246251038!2d88.78274772545693!3d23.607284412733275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f932d17d2c87a9%3A0xef57aff565a25644!2sDamurhuda%20D.S%20Dakhil%20Madrasa!5e0!3m2!1sen!2sbd!4v1755857312647!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
