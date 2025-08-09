import React from 'react';
import superImg from '../../../assets/images/Ashadul-Sir.png';
import asstSuperImg from '../../../assets/images/Talha-Sir.png';

const HeadTeacherMassages = () => {
    return (
        <div className="py-6 px-4">
            <div className="flex flex-col lg:flex-row justify-center gap-2 md:gap-6">
                {/* First Message */}
                <div className="border border-[#dfdfdf] w-full max-w-[770px] p-4 sm:p-6 rounded-sm">
                    <div className="flex items-center">
                        <div className="border border-[#dfdfdf] p-1.5">
                            <img className="w-[100px] sm:w-[150px] bg-[#58a0e8]" src={superImg} alt="Acting Superintendent" />
                        </div>
                        <div className="font-bold font-roboto pl-4 sm:pl-5">
                            <h1 className="text-[20px] sm:text-[30px] uppercase font-roboto">Md. Ashadul Haque</h1>
                            <h2 className="text-[#6c757d] text-[16px] sm:text-[20px] mt-1 font-roboto"> Superintendent (Acting)</h2>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <hr className="border-t border-gray-300" />
                    </div>
                    <div>
                        <p className="font-sans text-[#666666] text-justify text-[15px] sm:text-[16px] font-roboto">
                            It is regarded as one of the best institutions due to its discipline, teaching technique and favorable teaching environment. In the meantime we achieved name and fame due to cent percent successful result in all public exams and has acquired position in top of Bangladesh Madrasah education board.
                            <br /><br />
                            The students of the institution take part actively and successfully in the programs organized by Government and local authorities.
                            <br /><br />
                            In all respects, considering over all activities the institution is one of the best in Damurhuda Upazila.
                        </p>
                    </div>
                </div>

                {/* Second Message */}
                <div className="border border-[#dfdfdf] w-full max-w-[770px] p-4 sm:p-6 rounded-sm">
                    <div className="flex items-center">
                        <div className="border border-[#dfdfdf] p-1.5">
                            <img className="w-[100px] sm:w-[150px] bg-[#58a0e8]" src={asstSuperImg} alt="Assistant Superintendent" />
                        </div>
                        <div className="font-bold font-roboto pl-4 sm:pl-5">
                            <h1 className="text-[20px] sm:text-[30px] uppercase font-roboto ">Md. Abu Talha</h1>
                            <h2 className="text-[#6c757d] text-[16px] sm:text-[20px] mt-1 font-roboto">Asst. Superintendent (Acting)</h2>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <hr className="border-t border-gray-300" />
                    </div>
                    <div>
                        <p className="font-sans text-[#666666] text-justify text-[15px] sm:text-[16px] font-roboto">
                            I feel pleasure to know that our Madrasah is going to open its own website to flow of information. Through this newly opened website, the overall activities of the institution will be ensured getting new speed and accountability. I hope the website activities will be rich in information and be updated regularly.
                            <br /><br />
                            Those who are related opening the website is thanked and felicitated wholeheartedly. The students of this institution will be enlightened citizens by attaining quality education and their own way will be furnished with truths and morality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadTeacherMassages;
