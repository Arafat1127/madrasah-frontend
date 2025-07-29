import React from 'react';
import { useInView } from 'react-intersection-observer';
import useCountUp from '../../../customHooks/useCountUp';
import classRoom from '../../../assets/images/classroom.png';
import studentMale from '../../../assets/images/student-male.png';
import teacher from '../../../assets/images/teacher.png';
import staffs from '../../../assets/images/conference-background-selected.png';

const stats = [
    { img: classRoom, value: 10, label: 'Classes' },
    { img: studentMale, value: 434, label: 'Students' },
    { img: teacher, value: 15, label: 'Teachers' },
    { img: staffs, value: 4, label: 'Staffs' },
];

const Statistics = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className="bg-[#0B0B82] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2 font-roboto">Statistics</h2>
                <div className='text-[#020085] w-[120px] mt-2 mb-3 mx-auto'>
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
                <p className="text-[22px] mb-10 font-bold font-roboto">Our Organization At a Glance</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-10 lg:gap-40 justify-center items-center">
                    {stats.map((stat, idx) => {
                        const count = useCountUp(stat.value, 2000, inView);
                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center transition duration-100 ease-in-out p-6 hover:-translate-y-[7px]"
                            >
                                <img src={stat.img} alt='' className="w-[90px] h-auto" />
                                <h3 className="text-[35px] font-bold font-roboto mt-4">{count}</h3>
                                <p className="mt-1 text-[15px] font-bold font-roboto uppercase">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
