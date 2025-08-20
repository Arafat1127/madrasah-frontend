import React, { useEffect, useState } from "react";

export default function ScrollToTopButton({
    size = 'w-12 h-12',
    position = 'right-6 bottom-6',
    bg = 'bg-[#ff2439]',
    iconColor = 'text-white',
    showAfter = 200,
}) {
    const [visible, setVisible] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(mq.matches);
        const mqHandler = () => setReduceMotion(mq.matches);
        if (mq.addEventListener) mq.addEventListener('change', mqHandler);
        else mq.addListener(mqHandler);

        const onScroll = () => {
            setVisible(window.pageYOffset > showAfter);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (mq.removeEventListener) mq.removeEventListener('change', mqHandler);
            else mq.removeListener(mqHandler);
        };
    }, [showAfter]);

    const handleClick = () => {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    };

    const baseClasses = `fixed ${position} ${size} z-50 flex items-center justify-center rounded-full shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-green-300 ${bg} ${iconColor} `;

    const visibleClasses = visible
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-4 scale-90 pointer-events-none';

    const motionClasses = reduceMotion ? '' : 'transition-all duration-300';

    return (
        <button
            aria-label="Scroll to top"
            title="Scroll to top"
            onClick={handleClick}
            className={`${baseClasses} ${motionClasses} ${visibleClasses} cursor-pointer`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <span className="sr-only">Scroll to top</span>
        </button>
    );
}
