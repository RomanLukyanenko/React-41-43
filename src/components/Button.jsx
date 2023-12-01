import { useEffect, useState } from "react";

export const Button = ({onClick}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Button rendered ===>>');

        return () => {
            console.log("Button unmounted ===>>");
        };
    }, [count]);

    const trry = () => {
        setCount(count+1);
        if (onClick) {
            onClick();
        };
    };

    return <button onClick={trry}
    >Click me {count}</button>
};