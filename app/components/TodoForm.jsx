"use client";
import React, { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.prevenDefault();

    if (!todoItem) {
      return;
    }

    addTodo(todoItem);
    setTodoItem("");
    console.log(todoItem);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3 className="p-5">Number of todo items: {getNumberOfTodoItems()}</h3>
        <div className="flex space-x-3">
          <input
            className="p-2 text-black"
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            placeholder="Enter your todo"
          />
          <button className="bg-slate-400 p-1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
