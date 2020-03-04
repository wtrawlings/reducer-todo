import React, { useReducer }from "react";
import { initialState, titleReducer } from "../reducers/reducer";

const Todos = () => {
    const [ state, dispatch ] = useReducer(titleReducer, initialState)
    console.log(state)
    return (
        <div>
            
        </div>
    );
};
export default Todos;