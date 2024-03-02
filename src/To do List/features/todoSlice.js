import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Attend meeting at 9:30",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // property : addTodo and function : (state, action) => {}
    addTodo: (state, action) => {
      const todo = {
        // input
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //push into the initialState
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
