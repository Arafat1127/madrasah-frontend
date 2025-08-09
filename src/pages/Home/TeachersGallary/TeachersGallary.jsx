import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeachersGallery = () => {
    const [teachersDatas, setTeachersDatas] = useState([]);

    useEffect(() => {
        fetch("teachersData.json")
            .then((res) => res.json())
            .then((data) => setTeachersDatas(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center font-roboto">Our Teachers</h2>
            <div className='text-[#020085] w-[120px] mt-2 mb-6 mx-auto'>
                <hr className="border-t-2 border-[#666] ml-[15px]" />
                <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 justify-items-center">
                {teachersDatas.slice(0, 10).map((teacher) => (
                    <Link
                        key={teacher.id}
                        to={`/academic/teacher/${teacher.id}`}
                        className="group relative h-auto overflow-hidden rounded text-center"
                    >
                        <div className="border border-[#dfdfdf] p-1.5 h-[260px]">
                            <img
                                src={teacher.imageUrl}
                                alt={teacher.name}
                                className="bg-[#58a0e8] border-[1px] w-[130px] md:w-[190px] lg:w-[220px] h-auto object-cover"
                            />
                            {/* Mobile: Static Text Below Image */}
                            <div className="md:hidden mt-2 font-roboto">
                                <h3 className="text-[16px] font-bold uppercase">{teacher.name}</h3>
                                <p className="text-sm text-gray-600">{teacher.designation}</p>
                            </div>
                        </div>

                        {/* Desktop: Hover Text */}
                        <div className="absolute inset-0 bg-[#020085] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center items-center text-white text-center px-2 font-roboto hidden md:flex">
                            <h3 className="text-white text-[18px] font-bold mb-1 uppercase">{teacher.name}</h3>
                            <p className="text-xs">{teacher.designation}</p>
                        </div>


                    </Link>
                ))}
            </div>

            {/* All Teachers Button */}
            <div className="text-center mt-12">
                <Link
                    to="/academic/teachers"
                    className="relative w-auto h-[48px] bg-[#020085] inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border border-[#020085] hover:border-[#ff2439] hover:text-white group hover:bg-gray-50"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#ff2439] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative text-[15px] font-roboto">ALL TEACHERS</span>
                </Link>
            </div>
        </div>
    );
};

export default TeachersGallery;
