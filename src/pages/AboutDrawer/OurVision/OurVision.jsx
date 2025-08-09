import React from 'react';

const OurVision = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center  text-[#020085] pt-5 font-roboto">Mission Vision</h2>
            <div className='text-[#020085] w-[120px] mt-2  mx-auto pb-8'>
                <hr className="border-t-2 border-[#666] ml-[15px]" />
                <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
            </div>
            <div className='flex justify-center pb-10 p-5'>
                <div className='bg-[#fbfbfb] lg:w-4/6 2xl:w-3/6 p-5 text-[#666666] font-roboto '>
                    <div className='py-12'>
                        <h1 className='font-bold text-[21px] pb-2'><strong>Mission :</strong></h1>
                        <p className='text-[19px]'>The New School prepares students to understand, contribute to, and succeed in a rapidly changing society, and thus make the world a better and more just place. We will ensure that our students develop both the skills a sound liberal arts education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</p>
                    </div>
                    <div className='pb-10'>
                        <h1 className=' font-bold text-[21px] pb-2'><strong>Vision :</strong></h1>
                        <p className='text-[19px]'>We are and will be a university where design and social research drive approachesto studying issues of our time, such as democracy, urbanization, technological change, economic empowerment, sustainability, migration, and globalization. We will be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVision;