// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from "./Task";

const TodoList = props => {
    //console.log(props.preToDoList)
    return (
        <div className ="todo-list">
            {props.state.map(task => {
                //console.log(task);  
                return <Task task={state.item} key={state.id} 
                toggleTask={props.toggleTask} />
            })
        }
        <button onClick={props.clearCompletedTasks}>
        Clear Completed Tasks
        </button>
        </div>
    )
}

export default TodoList;