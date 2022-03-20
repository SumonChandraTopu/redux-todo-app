import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoLists: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          state.todoLists.push(action.payload)
      }
  }
});

export const {saveTodo} = todoSlice.actions

export default todoSlice.reducer