import React from 'react';

const GoverningBody = () => {
    const members = [
        {
            name: "JAINAL ABADIN",
            role: "Chairman",
            contact: "+8801701067677",
            image: '',
        },
        {
            name: "Md. Abu Talha",
            role: "Member",
            contact: "+8801720113995",
            image: "https://i.ibb.co/cc25qxkc/Talha-Sir.png"
        },
        {
            name: "MD.Abdullah All Mamun",
            role: "Member",
            contact: "+8801712177649",
            image: "https://i.ibb.co/fYGckJ0X/Abdullah-Sir.png"
        },
        {
            name: "MST.SHAHINA KHATUN",
            role: "Others Member",
            contact: "+8801715442678",
            image: "https://i.ibb.co/s9NPqpKT/Shahina-Madam.png"
        }
    ];

    return (
        <div className='bg-white text-center py-17 px-4'>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Managing <span className="text-[#0B0B82]">Committee</span>
            </h2>
            <div className='text-[#020085] w-[120px] mt-2 mb-6 mx-auto'>
                <hr className="border-t-2 border-[#666] ml-[15px]" />
                <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
            </div>

            {/* Members Grid */}
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white w-[350px]  md:w-[350px] shadow-all rounded-lg p-4  text-center">
                            <img src={member.image} alt={member.name} className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#58a0e8] mx-auto border border-[#0B0B82] object-contain" />
                            <h3 className="text-lg font-bold text-[#0B0B82] mt-4 font-roboto">{member.name}</h3>
                            <p className="text-gray-600 text-sm font-bold font-roboto">{member.role}</p>
                            <p className="text-sm text-gray-600 font-roboto">
                                <span className="font-semibold font-roboto">Contact:</span> {member.contact}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoverningBody;