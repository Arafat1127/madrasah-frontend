import React from 'react';

const SecondBanner = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='hidden lg:flex'>
                    <div className=' grid grid-cols-2 lg:grid-cols-4 w-full min-h-[100px] text-white font-roboto font-bold text-[18px] md:text-[20px]'>

                        {/* EIIN */}
                        <div className='h-[85px] bg-[#ff2439] flex justify-center items-center'>
                            <div className='text-[18px] flex flex-col items-center justify-center font-roboto'>
                                <span>EIIN</span>
                                <div>
                                    <span>115420</span>
                                </div>
                            </div>
                        </div>

                        {/* Institution Code */}
                        <div className='h-[85px] bg-[#020085] flex justify-center items-center '>
                            <div className='text-[18px] flex flex-col items-center justify-center font-roboto'>
                                <span>Institution Code</span>
                                <div>
                                    <span>N/A</span>
                                </div>
                            </div>
                        </div>
                        {/* Center Code */}
                        <div className='h-[85px] bg-[#ff2439] flex justify-center items-center'>
                            <div className='text-[18px] flex flex-col items-center justify-center font-roboto'>
                                <span>Center Code</span>
                                <div>
                                    <span>Damurhuda-1-510</span>
                                </div>
                            </div>
                        </div>
                        {/* Estd Year */}
                        <div className='h-[85px] bg-[#020085] flex justify-center items-center'>
                            <div className='text-[18px] flex flex-col items-center justify-center font-roboto'>
                                <span>Estd Year</span>
                                <div>
                                    <span>1978</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Mobile device */}
                <div className='flex lg:hidden'>
                    <div className=' grid grid-cols-2 lg:grid-cols-4 w-full min-h-[100px] text-white font-roboto font-bold text-[18px] md:text-[20px]'>

                        {/* EIIN */}
                        <div className='bg-[#ff2439]  flex justify-center items-center '>
                            <div className='flex text-[13px] flex-col items-center justify-center font-roboto'>
                                <span>EIIN</span>
                                <div>
                                    <span>115420</span>
                                </div>
                            </div>
                        </div>

                        {/* Institution Code */}
                        <div className='bg-[#020085] flex justify-center items-center'>
                            <div className='flex text-[13px] flex-col items-center justify-center font-roboto'>
                                <span>Institution Code</span>
                                <div>
                                    <span>N/A</span>
                                </div>
                            </div>
                        </div>
                        {/* Estd Year */}
                        <div className='bg-[#020085] flex justify-center items-center'>
                            <div className='flex text-[13px] flex-col items-center justify-center font-roboto'>
                                <span>Estd Year</span>
                                <div>
                                    <span>1978</span>
                                </div>
                            </div>
                        </div>
                        {/* Center Code */}
                        <div className='bg-[#ff2439] flex justify-center items-center'>
                            <div className='flex text-[13px] flex-col items-center justify-center font-roboto'>
                                <span>Center Code</span>
                                <div>
                                    <span>Damurhuda-1-510</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;