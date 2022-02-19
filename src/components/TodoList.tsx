import React from "react";

// create an interface to specify the shape of your props
interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
