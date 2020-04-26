import React from 'react';

const Task = props => {
    console.log(props);
    //right now I don't have props
    //are the props my state?
    return (
        <div>
            <p key={props.id} className = {`task${props.task.completed ? " done" : ""} `}>{props.task}</p>
        </div>
    )
    // <div className ={`task${props.task.completed ? " done" : ""} `}> 
    // //onClick = {(e) => props.toggleTask(props.task.id)} >
    //     {props.task.task}
    // </div>
};

export default Task;