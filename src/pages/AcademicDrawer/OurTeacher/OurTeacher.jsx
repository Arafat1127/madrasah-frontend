import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';

const OurTeacher = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/teachersData.json')
            .then(res => res.json())
            .then(data => {
                setTeachers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch teachers:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    OUR TEACHERS
                </h2>
                <div className="text-[#020085] w-[120px] mt-2 mb-6 mx-auto">
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>

                {/* Teacher Cards */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {teachers.map((teacher, index) => (
                        <Link
                            key={index}
                            to={`/academic/teacher/${teacher.id}`}
                            className="group"
                        >
                            <div
                                className="flex items-center bg-white shadow-md transition-all duration-300 rounded-md p-3 border-l-4 border-[#020085] hover:shadow-lg hover:scale-[1.02] hover:bg-[#f8f8ff]"
                            >
                                <img
                                    src={teacher.imageUrl}
                                    alt={teacher.name}
                                    className="w-20 h-24 object-cover rounded-sm bg-[#58a0e8] mr-4 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <h3 className="text-[#02008D] font-bold text-base leading-snug">
                                        {teacher.name}
                                    </h3>
                                    <p className="text-sm text-gray-700">{teacher.designation}</p>
                                    <p className="text-sm text-[#9d9d9d] mt-1">
                                        <span className="font-semibold">Contact :</span> {teacher.contactNo}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeacher;
