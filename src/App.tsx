import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [{ id: "t1", text: "Finish the course" }];

  const todoAddHandler = (text: string) => {
    const newTodo = { id: Math.random().toString(), text: text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
