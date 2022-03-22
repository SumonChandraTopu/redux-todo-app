import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todoLists: localStorage.getItem("TodoItems") ?  JSON.parse( localStorage.getItem("TodoItems")) : [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoLists.push(action.payload);
      localStorage.setItem("TodoItems", JSON.stringify(state.todoLists))
    },
    setCheck: (state, action) => {
      state.todoLists.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
      
    },
    deleteTodo: (state, action) => {
      const updateTodo = state.todoLists.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
      state.todoLists = updateTodo;
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions;
export const selectTodoLists = (state) => state.todo.todoLists;

export default todoSlice.reducer;
