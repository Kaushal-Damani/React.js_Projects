import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "../features/todoSlice";

export default function TodoList() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const AddTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white bg-gradient-to-b from-blue-900 to-indigo-800 min-h-screen ">
        <h1 className="text-center font-bold text-5xl p-9">To Do List</h1>

        <div className="box-content p-4 border-4 rounded-[30px]">
          <input
            className="text-black font-bold text-xl px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter Your Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={AddTodoHandler}
            className=" ml-1 border-2 rounded-md px-4 py-2 text-white font-bold text-xl focus:outline-none focus:border-blue-500"
          >
            Add Task
          </button>

          <hr className="mt-[20px] mb-[20px]" />
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center p-2">
              <label
                className={`ml-2 text-white`}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </label>
              <button
                onClick={() => dispatch(toggleComplete(todo.id))}
                className="ml-auto"
              >
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <X
                onClick={() => dispatch(removeTodo(todo.id))}
                className="border-2 ml-2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
