import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
import { useSelector } from "react-redux";
import { selectTodoLists } from "../features/todoSlice";

function TodoItems() {
  const todoList = useSelector(selectTodoLists);
  return (
    
      <div className="app-container">
        <div className="todo-container">
          {todoList.map((item) => (
            <TodoItem name={item} />
          ))}
        </div>
     
    </div>
  );
}

export default TodoItems;
