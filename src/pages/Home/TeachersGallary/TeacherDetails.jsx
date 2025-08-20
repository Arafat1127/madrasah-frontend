import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useParams, Link } from 'react-router-dom';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';
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
                <LoadingPage />
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
                <LoadingPage />
            </div>
        );
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <span className="flex items-center text-[15px] font-roboto gap-2 ">
                <Link to="/academic/teachers">
                    <span className='flex items-center gap-2 text-[#020085] hover:text-red-500'>
                        <span><FaArrowLeft /></span>
                        <span>Back to Teachers Gallery</span>
                    </span>
                </Link>
            </span>
            <div className=" bg-white rounded-lg  p-6 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
                {/* Left Section: Image and Basic Info */}
                <div className=" flex-shrink-0 text-center lg:text-left">
                    <img
                        src={teacher.imageUrl}
                        alt={teacher.name}
                        className="bg-[#58a0e8]  w-[190px] md:w-[160px] lg:w-[180px]  h-auto object-cover rounded border mx-auto md:mx-0"
                    />
                    <h2 className="text-center text-[20px] font-bold text-[#252525] mt-6 font-roboto">{teacher.name}</h2>
                    <h5 className="text-center text-[#525252] text-[14px] font-semibold mt-1 font-roboto">{teacher.designation}</h5>
                </div>

                {/* Right Section: Detailed Information */}
                <div className="w-full lg:w-2/4">
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