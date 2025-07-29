import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import { FaAnglesLeft } from 'react-icons/fa6';

const images = [img1, img2, img3, img4, img5];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full h-[40vh] md:h-[67vh] overflow-hidden">
            {/* Image slide */}
            <div
                className="w-full h-full bg-center bg-cover  transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}
            >
                {/* Overlay and content */}
                <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center text-center px-4">

                </div>
            </div>

            {/* Left Arrow */}
            <button
                className="absolute cursor-pointer top-1/2 left-2 md:left-5 transform -translate-y-1/2 text-white  bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
                onClick={goToPrevious}
            >
                <FaAngleLeft />
            </button>

            {/* Right Arrow */}
            <button
                className="absolute cursor-pointer top-1/2 right-2 md:right-5 transform -translate-y-1/2 text-white  bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
                onClick={goToNext}
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

export default Banner;
