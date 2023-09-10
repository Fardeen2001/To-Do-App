import { createSlice } from "@reduxjs/toolkit";
const initialtodo = { todoList: [], completedTodo: [] };
const todoSlice = createSlice({
  name: "todoList",
  initialState: initialtodo,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;

      state.todoList.push({
        id: Math.random() * 10,
        title: newTodo.title,
        description: newTodo.description,
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    completedTodo: (state, action) => {
      const completedTaskId = action.payload;
      const completedTask = state.todoList.find(
        (item) => item.id === completedTaskId
      );
      if (completedTask) {
        state.completedTodo.push(completedTask);
        state.todoList = state.todoList.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});
export const todoSliceActions = todoSlice.actions;
export default todoSlice.reducer;