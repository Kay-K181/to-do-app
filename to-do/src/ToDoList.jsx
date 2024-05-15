import React, { useState } from "react";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

export default function ToDoList(){
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState(['Fix door', 'New Job', 'Kill cats'])


  function addTask(){
    if(newTask.trim() !== ''){
        setTasks(prevState => [...prevState, newTask])
        setNewTask('')
    }   
  }

  function deleteTask(index){
    const updatedTask = tasks.filter((element, i) => i !== index);
    setTasks(updatedTask);
  }

//   function taskUp(index){

//   }

//   function taskDown(index){

//   }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(event) => {setNewTask(event.target.value)}}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="up-button" onClick={() => taskUp(index)}>Up</button>
                        <button className="down-button" onClick={() => taskDown(index)}>Down</button>                        
                    </li>)}
            </ol>
        </div>
    )
}