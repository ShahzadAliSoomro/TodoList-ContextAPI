"use client"
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const TodoContext = createContext();

const initialTodoState = ["Learn React Context API"];
const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoState);

    const getNumberOfTodoItems = () => todoList.length;

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
    }
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;