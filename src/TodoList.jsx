import React from "react";
import {MdDelete} from "react-icons/md";


const TodoList = (props) =>  {




    return (
        <>  
        <div className="todo_style">
            <i className="delete">
                <MdDelete className="md" onClick={() => {
                    props.onSelect(props.id)
                }}
                />
                
            </i>
            <li> {props.text}</li> 
        </div>
        </>

)}

export default TodoList;