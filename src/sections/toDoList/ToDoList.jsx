import { useState, useEffect, useRef } from 'react';
import "./ToDoList.css";

export const ToDoList = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []);
    const inputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const newTask = inputRef.current.value;
        inputRef.current.value = '';
        if (newTask && !tasks.includes(newTask)) {
            setTasks([...tasks, newTask]);
        }
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    return (
        <div id="container">
            <div id="taskForm">
                <input ref={inputRef} id="taskInput" type="text" placeholder="Назва задачі" />
                <button id="taskAdd" onClick={addTask}>+</button>
            </div>
            <ul id="tasksList">
                {tasks.map((task, index) => (
                    <li key={index}>{task}<button className='delete' onClick={() => deleteTask(task)}>&#10006;</button></li>
                ))}
            </ul>
        </div>
    );
};
