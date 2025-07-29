// src/hooks/useCountUp.js
import { useEffect, useState } from 'react';

const useCountUp = (end, duration = 500, startCounting) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let start = 0;
        const incrementTime = 30;
        const totalIncrements = duration / incrementTime;
        const increment = end / totalIncrements;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration, startCounting]);

    return count;
};

export default useCountUp;
