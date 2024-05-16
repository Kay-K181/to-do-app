import React, { useState } from "react";

export default function ToDoList(){
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([]);

    function add(){
        if(newTask.trim() !== ''){
            setTask(prevState => [...prevState, newTask])
            setNewTask('')
        }
    }

    function remove(index){
        const del = task.filter((element, i) => index !== i)
        setTask(del)
    }

    function taskUp(index){
        if(index > 0){
        const changeArr = [...task];
        [changeArr[index], changeArr[index - 1]] = [changeArr[index - 1], changeArr[index]];
        setTask(changeArr);
        }
        
    }

    function taskDown(index){
        if(index < task.length - 1){
            const changeArr = [...task];
        [changeArr[index], changeArr[index + 1]] = [changeArr[index + 1], changeArr[index]];

        setTask(changeArr);
        }
        
    }

    return(
        <div className="todo-wrapper">
            <h1>To-Do List</h1>
            <div className="newTask">
                <input 
                    type="text" 
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(event) => {setNewTask(event.target.value)}}
                />
                <button className="addBtn" onClick={add}>Add</button>
            </div>
            <ol>
                {task.map((element, index) =>
                    <li key={index}>
                        <span className="taskEdit">{element}</span>
                        <button className="delBtn" onClick={() => remove(index)}>Delete</button>
                        <button className="upDownBtn" onClick={() => taskUp(index)}>Up</button>
                        <button className="upDownBtn" onClick={() => taskDown(index)}>Down</button>                 
                    </li>                                              
                )}
            </ol>
            
        </div>
    )
}