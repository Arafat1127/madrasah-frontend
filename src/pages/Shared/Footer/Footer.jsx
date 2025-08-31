import React from 'react';
import logo from '../../../assets/images/logo.png'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegClone } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* Social Section */}
            <div className='bg-[#020085] w-full h-auto py-5'>
                <div className='flex justify-center flex-wrap gap-2 md:gap-4 text-white md:px-4'>
                    {[FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, index) => (
                        <span key={index} className='rounded-full p-[15px] bg-[#3d3ba1]'>
                            <Link to="https://www.facebook.com/dmurhuda.d.s.dakhil.madrasha" target="_blank" rel="noopener noreferrer">
                                <Icon />
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 py-10">
                <footer>
                    <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start pb-10 gap-8 px-4 '>
                        {/* 1st part - Institution Info */}
                        <div className="text-center lg:text-left mb-8 lg:mb-0 ">
                            <div className="flex justify-center lg:justify-start">
                                <Link to='/'>
                                    <img className='cursor-pointer h-[65px] w-[65px] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px]' src={logo} alt="Damurhuda D.S Dakhil Madrasah Logo" />
                                </Link>
                            </div>
                            <h1 className="text-[15px] md:text-[19px] font-bold text-[#020085] pb-3 mt-4">Damurhuda D.S Dakhil Madrasah</h1>
                            <div className="space-y-1">
                                <span className="flex items-center justify-center lg:justify-start gap-3 font-roboto text-[15px] text-gray-700">
                                    <span className='text-[#020085]'><FaPhoneAlt /></span>
                                    <span>Contact: 01309115420</span>
                                </span>
                                <span className="flex items-center justify-center lg:justify-start gap-3 font-roboto text-[15px] text-gray-700">
                                    <span className='text-[#020085]'><FaEnvelope /></span>
                                    <span>Email: damurhudads78@gmail.com</span>
                                </span>
                                <span className="flex items-center justify-center lg:justify-start gap-3 font-roboto text-[15px] text-gray-700">
                                    <span className='text-[#020085]'><FaMapMarkerAlt /></span>
                                    <span>Address: Damurhuda, Chuadanga 7220</span>
                                </span>
                            </div>
                        </div>

                        {/* 2nd part - Quick Links */}
                        <div className="text-center lg:text-left md:pt-10">
                            <h1 className='text-[#363636] font-bold text-[19px] mb-2'>Quick Links</h1>
                            <div className='flex justify-center lg:justify-start mb-6'>
                                <div className='text-[#020085] w-[90px] font-bold'>
                                    <hr className="border-t-2 border-[#020085]" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 '>
                                {/* Column 1 - Longer Names */}
                                <div>
                                    <Link to='https://moedu.portal.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Ministry of Education, Bangladesh</span>
                                        </span>
                                    </Link>
                                    <Link to='https://bmeb.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Bangladesh Madrasah Education Board</span>
                                        </span>
                                    </Link>
                                    <Link to='https://dshe.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Directorate of Secondary and Higher Education</span>
                                        </span>
                                    </Link>
                                    <Link to='https://dshe.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Bangladesh Bureau of Educational Information and Statistics</span>
                                        </span>
                                    </Link>
                                </div>

                                {/* Column 2 - Medium Names */}
                                <div>
                                    <Link to='https://nctb.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Download Your Books</span>
                                        </span>
                                    </Link>
                                    <Link to='http://www.educationboardresults.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Check Your Dakhil Result</span>
                                        </span>
                                    </Link>
                                    <Link to='https://nctb.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>National Curriculum and Textbook Board (NCTB)</span>
                                        </span>
                                    </Link>
                                    <Link to='https://bangladesh.gov.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>BD National Portal</span>
                                        </span>
                                    </Link>
                                </div>

                                {/* Column 3 - Shortest Names (last column) */}
                                <div>
                                    <Link to='https://www.buet.ac.bd/web/#' target="_blank" rel="noopener noreferrer">
                                        <span className='flex gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>BUET</span>
                                        </span>
                                    </Link>
                                    <Link to='https://www.du.ac.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Dhaka University</span>
                                        </span>
                                    </Link>
                                    <Link to='https://www.ru.ac.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Rajshahi University</span>
                                        </span>
                                    </Link>
                                    <Link to='https://www.iu.ac.bd' target="_blank" rel="noopener noreferrer">
                                        <span className='flex pt-2 gap-2 items-center font-roboto text-[15px] text-gray-700 hover:text-[#020085] transition-colors duration-200' >
                                            <span className='text-[#020085]'><FaRegClone /></span>
                                            <span>Islamic University Bangladesh</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Separator Line */}
                    <div className='w-11/12 md:w-2/3 mx-auto mt-10 mb-6'>
                        <hr className="border-t border-gray-300" />
                    </div>

                    {/* Developer Info */}
                    <div className=' bg-[#f4f7fa]'>
                        <div className="flex flex-col items-center gap-2 font-roboto text-[#2069b1]">
                            <div className="flex items-center gap-1 text-[16px] md:text-[18px]">
                                <span>Developed by</span>
                                <Link to="/" className="hover:underline hover:text-[#03945a] font-semibold transition">
                                    Khondakar Arafat
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 text-[16px] md:text-[18px]">
                                <span>Contact:</span>
                                <FaPhoneAlt className="text-[14px] md:text-[16px]" />
                                <span className="font-medium">01706336521</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;