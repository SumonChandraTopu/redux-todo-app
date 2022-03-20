import { Checkbox, FormLabel } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import "./Todo.css";

function TodoItem({ name }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(name.id));
  };

  return (
    <div className="todo-item">
      <Checkbox onChange={handleCheck} {...FormLabel} color="default" />
      <p className={name.done ? "todo-item-done" : "todo"}>{name.item}</p>
    </div>
  );
}

export default TodoItem;
