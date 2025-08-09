import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import mainBuilding from '../../../assets/images/academic-main-building_1.jpg'
import mainBuildingFront from '../../../assets/images/academic-main-building-front_1.jpg'
import mainGate from '../../../assets/images/main-gate_3.jpg'
import img2 from '../../../assets/images/img2.jpg';
const images = [mainBuilding, mainBuildingFront, mainGate, img2,];

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
                className="w-full h-full bg-center bg-cover object-contain  transition-all duration-1000 ease-in-out"
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
                className="absolute cursor-pointer top-1/2 left-2 md:left-[140px] transform -translate-y-1/2 text-white  bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition text-[20px] md:text-[27px]"
                onClick={goToPrevious}
            >
                <FaAngleLeft />
            </button>

            {/* Right Arrow */}
            <button
                className=" absolute cursor-pointer top-1/2 right-2 md:right-[140px] transform -translate-y-1/2 text-white  bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition text-[20px] md:text-[27px]"
                onClick={goToNext}
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

export default Banner;
