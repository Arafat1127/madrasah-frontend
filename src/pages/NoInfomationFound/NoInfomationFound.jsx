import React from 'react';
import emptyImg from '../../assets/images/empty.png'
import { useNavigate } from 'react-router-dom';

const NoInformationFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center py-10'>
            <div className=" flex flex-col items-center justify-center bg-[#fbfbfb] px-4 w-[500px] lg:w-[1000px] py-10">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <img className='w-[150px] h-[150px]' src={emptyImg} alt="" />
                    </div>
                    <h2 className="text-xl font-medium text-[#666666] mb-4 font-roboto">
                        Sorry! No Information Found.
                    </h2>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-2 px-5 py-2 border border-gray-400 rounded hover:bg-[#020085] transition hover:text-white cursor-pointer font-roboto"
                    >
                        BACK TO HOME
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoInformationFound;
