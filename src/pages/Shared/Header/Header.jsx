import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';
import NoticeBar from './NoticeBar';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <div className="w-full">
            {/* Top bar */}
            <div className="bg-black text-white text-sm px-4 lg:px-[180px] py-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="text-[12px] flex justify-between items-center gap-2">
                        <span className="flex items-center gap-1">📧 <span>shschool191@gmail.com</span></span>
                        <span className="flex items-center gap-1">📞 <span>01715442678</span></span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="cursor-pointer hidden md:flex gap-2 text-lg">
                            <FaTwitter />
                            <FaFacebookF />
                            <FaInstagram />
                            <FaWhatsapp />
                            <FaYoutube />
                        </div>
                        <button className=" cursor-pointer bg-[#020085] px-3 py-1 rounded text-white text-sm">বাংলা</button>
                        <button className="cursor-pointer bg-orange-500 text-white px-3 py-1 rounded text-sm">সাইটম্যাপ</button>
                    </div>
                </div>
            </div>

            {/* Logo area */}
            <div className="bg-white py-2 px-1 lg:px-[180px] shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to='/'> <img src={logo} alt="Logo" className="cursor-pointer h-[65px] w-[65px] md:h-[80px] md:w-[80px] lg:h-[85px] lg:w-[85px]" /></Link>
                    <div>
                        <p className="text-[12px] font-semibold text-gray-900 font-roboto">ESTD : 1978</p>
                        <h1 className="text-[15px] md:text-xl font-bold font-roboto text-[#020085]">Damurhuda D.S Dakhil Madrasah</h1>
                        <p className="text-[10px] font-roboto md:text-[13px] font-bold text-gray-700">Damurhuda , Chuadanga</p>
                    </div>
                </div>

                <div className="lg:hidden text-[18px] pr-2 text-[#020085]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-[#020085] text-white relative">
                {/* Desktop Menu */}
                <ul className="hidden lg:flex px-6 lg:px-[180px] py-3 gap-6 font-semibold text-sm">
                    <li className=''><Link to="/" className=" ">HOME</Link></li>

                    {/* ABOUT */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            ABOUT <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="/about-us">About Us</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="/history">History</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Mission</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Vision</Link></li>
                        </ul>
                    </li>

                    {/* INFORMATION */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            INFORMATION <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Notice</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Events</Link></li>
                        </ul>
                    </li>

                    {/* ACADEMIC */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            ACADEMIC <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="/teachers">Our Teachers</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Syllabus</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Routine</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Class Info</Link></li>
                        </ul>
                    </li>

                    {/* ADMISSION */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            ADMISSION <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Rules</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Apply</Link></li>
                        </ul>
                    </li>

                    {/* STUDENT */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            STUDENT <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Student List</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Gallery</Link></li>
                        </ul>
                    </li>

                    {/* RESULT */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            RESULT <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">JSC</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">SSC</Link></li>
                        </ul>
                    </li>

                    {/* OTHERS */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            OTHERS <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-md
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px]`}
                        >
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Library</Link></li>
                            <li className="px-4 py-2 hover:bg-[#020085] hover:text-white"><Link to="#">Clubs</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/contact" className="">CONTACT</Link></li>
                </ul>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <ul className="lg:hidden px-4 py-4 space-y-2 bg-blue-900 text-white">
                        <li>
                            <Link to="/" className="block py-2">HOME</Link>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('about')}
                            >
                                ABOUT
                                <span>{openDropdown === 'about' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'about' ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Mission</Link></li>
                                <li><Link to="#" className="block py-1">Vision</Link></li>
                                <li><Link to="#" className="block py-1">History</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('information')}
                            >
                                INFORMATION
                                <span>{openDropdown === 'information' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'information' ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Notice</Link></li>
                                <li><Link to="#" className="block py-1">Events</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('academic')}
                            >
                                ACADEMIC
                                <span>{openDropdown === 'academic' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'academic' ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Syllabus</Link></li>
                                <li><Link to="#" className="block py-1">Routine</Link></li>
                                <li><Link to="#" className="block py-1">Class Info</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('admission')}
                            >
                                ADMISSION
                                <span>{openDropdown === 'admission' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'admission' ? 'max-h-32' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Rules</Link></li>
                                <li><Link to="#" className="block py-1">Apply</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('student')}
                            >
                                STUDENT
                                <span>{openDropdown === 'student' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'student' ? 'max-h-32' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Student List</Link></li>
                                <li><Link to="#" className="block py-1">Gallery</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('result')}
                            >
                                RESULT
                                <span>{openDropdown === 'result' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'result' ? 'max-h-28' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">JSC</Link></li>
                                <li><Link to="#" className="block py-1">SSC</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('others')}
                            >
                                OTHERS
                                <span>{openDropdown === 'others' ? '▲' : '▼'}</span>
                            </button>
                            <ul
                                className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === 'others' ? 'max-h-28' : 'max-h-0'
                                    }`}
                            >
                                <li><Link to="#" className="block py-1">Library</Link></li>
                                <li><Link to="#" className="block py-1">Clubs</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/facilities" className="block py-2">FACILITIES</Link>
                        </li>

                        <li>
                            <Link to="/contact" className="block py-2">CONTACT</Link>
                        </li>
                    </ul>
                )}
            </nav>
            <div className=''>
                <NoticeBar />
            </div>
        </div>
    );
};

export default Header;