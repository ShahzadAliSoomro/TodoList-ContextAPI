"use client"
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React Context API"];
const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    const getNumberOfTodoItems = () => todoList.length;

    const addTodo = (mewTodoItem) => {
        setTodoList([...todoList, mewTodoItem]);
    }

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newList);
        
    }

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
        addTodo,
    }
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;