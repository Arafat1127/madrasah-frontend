import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useParams, Link } from 'react-router-dom';
const TeacherDetails = () => {
    const [teachersDatas, setTeachersDatas] = useState([]);
    console.log(teachersDatas);
    useEffect(() => {
        fetch("/teachersData.json")
            .then((res) => res.json())
            .then((data) => setTeachersDatas(data))
    }, []);
    const { teacherId } = useParams();
    const teacher = teachersDatas.find((t) => t.id === teacherId);

    if (!teacher) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4 font-roboto">Teacher Not Found</h2>
                <p className="text-gray-700 font-roboto">The teacher you are looking for does not exist.</p>
                <Link
                    to="/teachers"
                    className="relative w-auto h-[45px] bg-[#020085] inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border border-[#020085] hover:border-[#ff2439] hover:text-white group hover:bg-gray-50"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#ff2439] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <FaArrowLeft />
                    </span>
                    <span className="relative text-[15px] font-roboto"> Back to Teachers Gallery</span>
                </Link>
            </div>
        );
    }

    const DetailRow = ({ label, value }) => (
        <div className="flex  border-b border-gray-200 py-2 gap-7 md:gap-0">
            <div className="w-auto md:w-1/3 text-[#252525] font-semibold font-roboto">{label} :</div>
            <div className="w-auto md:w-2/3 text-[#252525] ">{value}</div>
        </div>
    );
    if (teachersDatas.length === 0) {
        return (
            <div className="text-center py-10 text-blue-600 font-semibold text-xl">
                Loading...
            </div>
        );
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                to="/teachers"
                className="relative w-auto h-[45px] bg-[#020085] inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border border-[#020085] hover:border-[#ff2439] hover:text-white group hover:bg-gray-50 font-roboto"
            >
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#ff2439] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <FaArrowLeft />
                </span>
                <span className="relative text-[15px] font-roboto"> Back to Teachers Gallery</span>
            </Link>

            <div className=" bg-white rounded-lg  p-6 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
                {/* Left Section: Image and Basic Info */}
                <div className=" flex-shrink-0 text-center lg:text-left">
                    <img
                        src={teacher.imageUrl}
                        alt={teacher.name}
                        className="bg-[#58a0e8]  w-[140px] md:w-[160px] lg:w-[180px]  h-auto object-cover rounded-2xl mx-auto md:mx-0"
                    />
                    <h2 className="text-center text-[20px] font-bold text-[#252525] mt-6 font-roboto">{teacher.name}</h2>
                    <h5 className="text-center text-[#525252] text-[14px] font-semibold mt-1 font-roboto">{teacher.designation}</h5>
                </div>

                {/* Right Section: Detailed Information */}
                <div className="w-full lg:w-2/3">
                    <h3 className="text-2xl font-bold text-[#252525] mb-6 border-b pb-2 font-roboto">Personal Information</h3>
                    <div className="space-y-3 text-red-500 ">
                        <DetailRow label="MPO Index No." value={teacher.mpoIndexNo} />
                        <DetailRow label="Joining Date" value={teacher.joiningDate} />
                        <DetailRow label="Date of MPO" value={teacher.dateOfMpo} />
                        <DetailRow label="Date of Birth  " value={teacher.dateOfBirth} />
                        <DetailRow label="E-mail" value={teacher.email} />
                        <DetailRow label="Contact No." value={teacher.contactNo} />
                        <DetailRow label="Qualification " value={teacher.qualification} />
                        <DetailRow label="Experience " value={teacher.experience} />
                        <DetailRow label="Interest " value={teacher.interest} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;