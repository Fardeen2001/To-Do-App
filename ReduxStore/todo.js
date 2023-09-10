import { createSlice } from "@reduxjs/toolkit";
const initialtodo = { todoList: [], completedTodo: [] };
const todoSlice = createSlice({
  name: "todoList",
  initialState: initialtodo,
  reducers: {
    replaceTodo: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;

      state.todoList.push({
        _id: (Math.random() * 10).toString(),
        title: newTodo.title,
        description: newTodo.description,
        status: newTodo.status,
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item._id !== action.payload
      );
    },
    completedTodo: (state, action) => {
      const completedTaskId = action.payload;
      const completedTask = state.todoList.find(
        (item) => item._id === completedTaskId
      );
      if (completedTask) {
        state.completedTodo.push(completedTask);
        state.todoList = state.todoList.filter(
          (item) => item._id !== action.payload
        );
      }
    },
  },
});
export const todoSliceActions = todoSlice.actions;
export default todoSlice.reducer;
