import React, {useState } from "react";
import TodoList from "./TodoList";
const App = ()=>{
    const [inputlist , setinputlist] = useState("");

    const [items , setItems] = useState([]);


    const itemEvent =(event)=>{
        
        setinputlist(event.target.value);
    };

    const listOfItems = () =>{
        setItems((olditems)=>{
           return [...olditems , inputlist];
        });
        setinputlist("");
    };

    const deleteitems = (id) =>{
        setItems((olditems) =>{
            return olditems.filter((arrElem , index)=>{
                return index !== id;
            });
        });
    };




    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>Plan for Today?</h1>
                <br/>

                <input type="text"
                 placeholder="Add Yours ToDo"
                 value={inputlist}
                 onChange={itemEvent}
                />
                <button onClick={listOfItems}> 
                Add
                 </button>


                <ol>
                    {items.map((itemval , index)=>{
                        return <TodoList 
                        key={index} 
                        id = {index}
                        text = {itemval}
                        onSelect={deleteitems}
                        />
                    })}
                </ol>
            </div>
        </div>
        
        </>
    )

}

export default App;