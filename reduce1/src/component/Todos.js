import React, { useReducer, useState }from "react";
import { initialState, titleReducer } from "../reducers/reducer";
import Task from "./Task"
const Todos = () => {
    const [ state, dispatch ] = useReducer(titleReducer, initialState)
    //is this deconstructing the state and dispatch?
    const [todo, setTodo ]= useState("")
    console.log(state)

    const changeHandler = (e) => {
        setTodo(e.target.value)
        console.log(todo)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload:todo})
        //dispatch goes back to reducer.js
        //we use this to choose ACTIONs (Type and Payload)
    }

    return (
        <div>
            <p>Trying to make a todo list with useReducer</p>
            <form>
                <input type="text" name="taskText" 
                value={todo} 
                onChange={changeHandler} 
                //had to turn these off to let form show in app
                />
                <button type="submit" onClick={submitHandler} >Add</button>
            </form>
            {state.map(task => {
                //console.log(task);  
                return <Task task={task.item} key={task.id} 
                //toggleTask={propstoggleTask}
                 />
               
            })}
        </div>
    );
};
export default Todos;