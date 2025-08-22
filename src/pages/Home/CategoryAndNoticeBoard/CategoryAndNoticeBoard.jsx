// Dashboard.jsx
import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaCheckCircle, FaBolt, FaBell, FaNewspaper, FaRegRegistered, FaImages, FaAngleDown, FaAngleUp, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryAndNoticeBoard = () => {

    const Box = ({ icon, text }) => (
        <div className="bg-[#020085] hover:bg-white text-white hover:text-[#020085] flex flex-col items-center justify-center p-6 rounded-md shadow hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">{icon}</div>
            <div className="text-md font-medium text-center">{text}</div>
        </div>
    );
    const notices = [
        { title: "অর্ধবার্ষিক পরীক্ষার সময়সূচী পরিবর্তন", date: "13 Jul, 2025" },
        { title: "অর্ধ বার্ষিক পরীক্ষা সংক্রান্ত নোটিশ", date: "01 Jul, 2025" },
        { title: "২১শে ফেব্রুয়ারী উদযাপন", date: "" },
    ];

    return (
        <div className="bg-white  md:flex  justify-center gap-6 p-4 md:p-10 items-start">
            {/* Left Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-[900px] font-roboto cursor-pointer">
                <Link to='/student/student-list'><Box icon={<FaUsers />} text="Student List" /></Link>
                <Link to='/academic/teachers'> <Box icon={<FaChalkboardTeacher />} text="Our Teachers" /></Link>
                <Link to='/academic/attendance-sheet'> <Box icon={<FaCheckCircle />} text="Attendance Sheet" /></Link>
                <Link to='/noInformationFound'><Box icon={<FaBolt />} text="Result" /></Link>
                <Link to='/noInformationFound'><Box icon={<FaBell />} text="Exam Schedule" /></Link>
                <Link to='/noInformationFound'><Box icon={<FaNewspaper />} text="News" /></Link>
                <Link to='/academic/routine'><Box icon={<FaRegRegistered />} text="Routine" /></Link>
                <Link to='https://nctb.gov.bd'><Box icon={<FaBook />} text="Download Books" /></Link>
                <Link to='/student/photo-gallery'><Box icon={<FaImages />} text="Gallery" /></Link>
            </div>

            {/* Right Notice Board */}
            <div className="bg-[#020085] text-white rounded-lg w-full lg:w-1/3 shadow-md overflow-hidden mt-4 md:mt-0">
                <div className="px-4 py-3 text-lg font-semibold border-b  border-white flex items-center gap-2">
                    <span className="text-white text-xl">❝</span> NOTICE BOARD
                </div>
                <div className="bg-white text-black divide-y p-4 border-r border-l border-[#020085]">
                    {notices.map((notice, index) => (
                        <div key={index} className="py-2">
                            <h3 className="font-semibold text-sm font-roboto">{notice.title}</h3>
                            <p className="text-xs font-bold font-roboto text-[#020085]">{notice.date}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#020085] text-white px-4 py-3 flex items-center justify-between">
                    <button className="flex items-center gap-1 bg-red-600 px-3 py-1 rounded text-sm">
                        <FaAngleDown /> More
                    </button>
                    <div className="flex gap-2">
                        <button className="bg-red-600 p-1 rounded text-sm"><FaAngleDown /></button>
                        <button className="bg-red-600 p-1 rounded text-sm"><FaAngleUp /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryAndNoticeBoard;
