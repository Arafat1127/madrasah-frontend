// src/components/ManagingCommittee.jsx
import React from 'react';

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

const events = [
    {
        date: "18",
        month: "Feb",
        title: "Study Tour-2025",
        fullDate: "18 Feb, 2025"
    },
    {
        date: "29",
        month: "Nov",
        title: "ভেলা প্রতিযোগিতার পরিকল্পনা সভা-২০২৩",
        fullDate: "29 Nov, 2023"
    },
    {
        date: "19",
        month: "Sep",
        title: "Sheikh Russel Corner",
        fullDate: "19 Sep, 2022"
    }
];

const news = [
    {
        title: "Amar Desh News",
        date: "24 Jul, 2025"
    },
    {
        title: "21 February",
        date: "18 Feb, 2025"
    },
    {
        title: "UNO visited our school",
        date: "01 Jul, 2020"
    }
];

const ManagingCommittee = () => {
    return (
        <div className="bg-white text-center py-10 px-4">
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
                        <div key={index} className="bg-white w-[240px]  md:w-[350px] shadow-md rounded-lg p-4  text-center">
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

            {/* Events & News Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
                {/* Events */}
                <div className="bg-[#0B0B82] text-white rounded-md overflow-hidden shadow-lg">
                    <h3 className="text-xl font-bold px-4 py-3 border-b border-white">Events</h3>
                    {events.map((event, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white text-black px-4 py-3 border-b">
                            <div className="bg-[#0B0B82] text-white w-12 h-12 flex flex-col items-center justify-center font-bold text-sm rounded">
                                <span>{event.date}</span>
                                <span>{event.month}</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">{event.title}</h4>
                                <p className="text-sm text-gray-600">{event.fullDate}</p>
                            </div>
                        </div>
                    ))}
                    <div className="bg-black text-white text-center py-2 font-semibold cursor-pointer hover:opacity-90">
                        SEE MORE ...
                    </div>
                </div>

                {/* News */}
                <div className="bg-[#0B0B82] text-white rounded-md overflow-hidden shadow-lg">
                    <h3 className="text-xl font-bold px-4 py-3 border-b border-white">NEWS</h3>
                    {news.map((item, i) => (
                        <div key={i} className="bg-white text-black px-4 py-3 border-b">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.date}</p>
                        </div>
                    ))}
                    <div className="bg-black text-white text-center py-2 font-semibold cursor-pointer hover:opacity-90">
                        SEE MORE ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagingCommittee;
