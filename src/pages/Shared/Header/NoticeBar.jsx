import React, { useEffect, useRef, useState } from 'react'; // useRef এবং useState যোগ করুন
import { FaBullhorn } from 'react-icons/fa';

const NoticeBar = () => {
    const notices = [
        'বার্ষিক পরীক্ষার সময়সূচী পরিবর্তন',
        'অর্ধ বার্ষিক পরীক্ষার সহায়তা নোটিশ',
        '২১শে ফেব্রুয়ারি উদযাপন',
        '২৬শে মার্চ উদযাপন',
        '১৫ই আগস্ট জাতীয় শোক দিবস পালন',

    ];

    const marqueeRef = useRef(null);
    const [animationDuration, setAnimationDuration] = useState('60s');

    useEffect(() => {
        if (marqueeRef.current) {

            const contentWidth = marqueeRef.current.scrollWidth;
            const containerWidth = marqueeRef.current.offsetWidth;


            const speedFactor = 0.05;
            const duration = ((contentWidth + containerWidth) * speedFactor);


            const minDuration = 15;

            setAnimationDuration(`${Math.max(duration, minDuration)}s`);
        }
    }, [notices]);
    return (
        <div className="bg-white  shadow-md flex items-center lg:px-[180px]">
            {/* Notice Label */}
            <div className=" text-[#020085] px-4 py-2 flex items-center gap-2 font-bold whitespace-nowrap">
                <FaBullhorn /> <span>NOTICE</span>
            </div>

            {/* Scrolling Notices */}
            <div className="overflow-hidden relative w-full">
                <div
                    ref={marqueeRef}
                    className="animate-marquee whitespace-nowrap py-2 text-sm text-red-700 font-medium"
                    style={{ '--marquee-duration': animationDuration }}
                >

                    {notices.map((notice, index) => (
                        <span key={index} className="mx-8 inline-block text-[10px] md:text-[13px]">
                            🔺 {notice}
                        </span>
                    ))}

                    {notices.map((notice, index) => (
                        <span key={`duplicate-${index}`} className="mx-8 inline-block text-[10px] md:text-[13px]">
                            🔺 {notice}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticeBar;