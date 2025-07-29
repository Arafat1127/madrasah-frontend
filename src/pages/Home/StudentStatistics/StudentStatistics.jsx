import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import useCountUp from '../../../customHooks/useCountUp'; // path adjust if needed

const stats = [
    { value: 25, label: 'Five' },
    { value: 65, label: 'Six' },
    { value: 35, label: 'Seven' },
    { value: 30, label: 'Eight' },
    { value: 43, label: 'Nine' },
    { value: 27, label: 'Ten' },
];

const StudentStatistics = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // শুধু একবার trigger হবে
        threshold: 0.2, // 20% element visible হলে count শুরু হবে
    });

    return (
        <div>
            {/* Statistics Section */}
            <div ref={ref} className="min-h-[550px] bg-[#1b1991] text-white py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-roboto">Student Statistics</h2>
                    <div className='text-[#020085] w-[120px] mt-2 mb-3 mx-auto'>
                        <hr className="border-t-2 border-[#666] ml-[15px]" />
                        <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                    </div>
                    <p className="text-lg sm:text-[22px] mb-10 font-bold font-roboto">Class wise Students</p>
                    <div className='flex justify-center'>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-10 lg:gap-16">
                            {stats.map((stat, idx) => {
                                const count = useCountUp(stat.value, 1500, inView);
                                return (
                                    <div
                                        key={idx}
                                        className="bg-[#ff2439] rounded-full w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] flex flex-col items-center justify-center transition duration-200 hover:-translate-y-[7px]"
                                    >
                                        <h3 className="text-2xl sm:text-[28px] lg:text-[35px] font-bold font-roboto">{count}</h3>
                                        <p className="text-sm sm:text-[15px] font-bold font-roboto uppercase">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentStatistics;
