import { Checkbox, FormLabel, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setCheck } from "../features/todoSlice";
import "./Todo.css";

function TodoItem({ name }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(name.id));
  };
  const handleDeleteTodo = (name) => {
    dispatch(deleteTodo(name));
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <Checkbox onChange={handleCheck} {...FormLabel} color="default" />
        <p className={name.done ? "todo-item-done" : "todo"}>{name.item}</p>
      </div>
      {name.done && (
        <IconButton aria-label="delete" size="small">
          <DeleteIcon
            onClick={() => handleDeleteTodo(name)}
            color="light"
            fontSize="inherit"
          />
        </IconButton>
      )}
    </div>
  );
}

export default TodoItem;
