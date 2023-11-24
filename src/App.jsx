import { useState } from 'react'
import {ToDoList} from "./sections/toDoList/index"

import './App.css'


export const App = () => {
    
    const [hiding, setHide] = useState(false);

    const showText = () => {
        setHide(!hiding);
    }
    return (
        <>
            <button onClick={showText}>
                {hiding ? 'Show' : 'Hide'} Text
            </button>
            { !hiding && <h1>Show text</h1> }

            <ToDoList />

        </>
    );
};







