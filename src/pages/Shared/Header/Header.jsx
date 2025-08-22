import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaBars, FaTimes, FaAngleDown, FaEnvelope } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';
import { FaLocationDot } from 'react-icons/fa6';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <div className="w-full">
            {/* Top bar */}
            <div className="bg-black text-white text-sm px-4 lg:px-[180px] py-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="text-[12px] flex justify-between items-center gap-2">
                        <span className="flex items-center gap-1"><FaEnvelope /> <span>damurhudads78@gmail.com</span></span>
                        <span className="flex items-center gap-1">📞 <span>01309115420</span></span>
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
                        <Link to='/contact'><button className="cursor-pointer bg-orange-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"><FaLocationDot />সাইটম্যাপ</button></Link>
                    </div>
                </div>
            </div>

            {/* Logo area */}
            <div className="bg-white py-2 px-5 lg:px-[100px] xl:px-[180px]shadow-2xl  flex items-center justify-between">
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
                <ul className="hidden lg:flex px-6 lg:px-[100px] xl:px-[180px] py-3 gap-6 font-semibold text-sm">
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
                            <Link to="/about-us">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">About Us</li></Link>
                            <Link to="/history">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">History</li></Link>
                            <Link to="/mission-vision">      <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Our Vision</li></Link>
                            <Link to="/governing-body">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Governing Body</li></Link>
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
                            <Link to="/information/notice">   <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Notice</li></Link>
                            <Link to="/information/events">    <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Events</li></Link>
                            <Link to="/information/holidays-2025">    <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Holidays 2025</li></Link>
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
                            <Link to="/academic/teachers">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Our Teachers</li></Link>
                            <Link to="/noInformationFound"> <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Syllabus</li></Link>
                            <Link to="/academic/routine">   <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Routine</li></Link>
                            <Link to="/noInformationFound">   <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Class Info</li></Link>
                            <Link to="/academic/attendance-sheet"><li className="px-4 py-2 hover:bg-[#020085] hover:text-white">AttendanceSheet</li></Link>
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
                            <Link to="/noInformationFound">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Rules</li></Link>
                            <Link to="/noInformationFound">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Apply</li></Link>
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
                            <Link to="/student/student-list">   <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Student List</li></Link>
                            <Link to="/student/photo-gallery">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Gallery</li></Link>
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
                            <Link to="/academic/result"><li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Academic</li></Link>
                            <Link to="http://www.educationboardresults.gov.bd" target='_blank' rel='noopener noreferrer'>  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">SSC</li></Link>
                        </ul>
                    </li>

                    {/* OTHERS */}
                    <li className="relative group">
                        <span className=" cursor-pointer flex items-center gap-0.5">
                            OTHERS <FaAngleDown />
                        </span>
                        <ul
                            className={`absolute top-full left-0 bg-white text-black shadow-all
                            opacity-0 pointer-events-none
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            translate-y-2 group-hover:translate-y-0 transform
                            transition-all duration-300 ease-in-out z-50 min-w-[150px] `}
                        >
                            <Link to="/noInformationFound"><li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Library</li></Link>
                            <Link to="/noInformationFound">  <li className="px-4 py-2 hover:bg-[#020085] hover:text-white">Clubs</li></Link>
                        </ul>
                    </li>

                    <Link to="/contact" > <li>CONTACT</li></Link>
                </ul>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <ul className="lg:hidden px-4 py-4 space-y-2 bg-blue-900 text-white transition-all duration-500 ease-in-out">
                        <li>
                            <Link to="/" className="block py-2" onClick={handleLinkClick}>HOME</Link>
                        </li>

                        {/* ABOUT */}
                        <li>
                            <button
                                className="w-full text-left py-2 flex justify-between items-center"
                                onClick={() => toggleDropdown('about')}
                            >
                                ABOUT
                                <span>{openDropdown === 'about' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/about-us" className="block py-1" onClick={handleLinkClick}> <li>About Us</li></Link>
                                <Link to="/history" className="block py-1" onClick={handleLinkClick}> <li>History</li></Link>
                                <Link to="/mission-vision" className="block py-1" onClick={handleLinkClick}>  <li>Our Vision</li></Link>
                                <Link to="/governing-body" className="block py-1" onClick={handleLinkClick}> <li>Governing Body</li></Link>
                            </ul>
                        </li>

                        {/* INFORMATION */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('information')}>
                                INFORMATION
                                <span>{openDropdown === 'information' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'information' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/information/notice" className="block py-1" onClick={handleLinkClick}> <li>Notice</li></Link>
                                <Link to="/information/events" className="block py-1" onClick={handleLinkClick}> <li>Events</li></Link>
                                <Link to="/information/holidays-2025" className="block py-1" onClick={handleLinkClick}> <li>Holidays 2025</li></Link>

                            </ul>
                        </li>

                        {/* ACADEMIC */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('academic')}>
                                ACADEMIC
                                <span>{openDropdown === 'academic' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'academic' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/academic/teachers" className="block py-1" onClick={handleLinkClick}> <li>Our Teachers</li></Link>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}>  <li>Syllabus</li></Link>
                                <Link to="/academic/routine" className="block py-1" onClick={handleLinkClick}> <li>Routine</li></Link>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}> <li>Class Info</li></Link>
                                <Link to="/academic/attendance-sheet" className="block py-1" onClick={handleLinkClick}> <li>Attendance Sheet</li></Link>

                            </ul>
                        </li>

                        {/* ADMISSION */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('admission')}>
                                ADMISSION
                                <span>{openDropdown === 'admission' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'admission' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}> <li>Rules</li></Link>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}><li>Apply</li></Link>
                            </ul>
                        </li>

                        {/* STUDENT */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('student')}>
                                STUDENT
                                <span>{openDropdown === 'student' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'student' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/student/student-list" className="block py-1" onClick={handleLinkClick}>  <li>Student List</li></Link>
                                <Link to="/student/photo-gallery" className="block py-1" onClick={handleLinkClick}>   <li>Gallery</li></Link>
                            </ul>
                        </li>

                        {/* RESULT */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('result')}>
                                RESULT
                                <span>{openDropdown === 'result' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'result' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/academic/result" className="block py-1" onClick={handleLinkClick}>  <li>Academic</li></Link>
                                <Link to="http://www.educationboardresults.gov.bd" className="block py-1" onClick={handleLinkClick}> <li>SSC</li></Link>
                            </ul>
                        </li>

                        {/* OTHERS */}
                        <li>
                            <button className="w-full text-left py-2 flex justify-between items-center" onClick={() => toggleDropdown('others')}>
                                OTHERS
                                <span>{openDropdown === 'others' ? '▲' : '▼'}</span>
                            </button>
                            <ul className={`pl-4 mt-1 space-y-1 bg-blue-800 overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'others' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}> <li>Library</li></Link>
                                <Link to="/noInformationFound" className="block py-1" onClick={handleLinkClick}> <li>Clubs</li></Link>
                            </ul>
                        </li>

                        {/* Other */}
                        <Link to="/facilities" className="block py-2" onClick={handleLinkClick}>  <li>FACILITIES</li></Link>
                        <Link to="/contact" className="block py-2" onClick={handleLinkClick}> <li>CONTACT</li></Link>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Header;