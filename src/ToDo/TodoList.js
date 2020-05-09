import React from "react";
import "./TodoList.css";
import ToDoItem from "./ToDoItem";

const style = {
    ul:{
        listStyle:"none",
        margin: 0,
        padding: 0
    }
}
export default function TodoList(props){
    return(
        <ul className="asd" style={style.ul}>
            {props.todos.map((todo, index) =>{
                return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}