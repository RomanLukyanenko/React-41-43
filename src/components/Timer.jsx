import { useEffect, useState } from "react";

export const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);

        return () => clearTimeout(timer); 
    }, [time]);

    return (
        <div>
            <p>Time: {time} seconds</p>
        </div>
    );
};
