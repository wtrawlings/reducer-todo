import React, { useReducer }from "react";
import { initialState, titleReducer } from "../reducers/reducer";

const Todos = () => {
    const [ state, dispatch ] = useReducer(titleReducer, initialState)
    console.log(state)
    return (
        <div>
            <p>Trying to make a todo list with useReducer</p>
            <form>
                <input type="text" name="taskText" 
                //value={this.state.taskText} 
                //onChange={this.changeHandler} 
                //had to turn these off to let form show in app
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};
export default Todos;