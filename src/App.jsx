import { useRef, useState } from "react";
import { Button } from "./components/Button";


export const App = () => {
    const inputRef = useRef(null);
    const [color, setColor] = useState()

    return (
        <>
            <button onClick={() => {
            setColor(inputRef.current.value)
            }}>
                Get color 
            </button> 

            <Button ref={inputRef}/>
            
            <p> Selected color {color} </p>
        </>
        );
};