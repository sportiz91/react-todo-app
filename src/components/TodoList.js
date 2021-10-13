import React from "react";
import TodoIndividual from "./TodoIndividual";

const TodoList = ({ name, id, todo, todoArray, setTodoArray }) => {
  return (
    <ul className="all-todos">
      <TodoIndividual
        name={name}
        id={id}
        todo={todo}
        todoArray={todoArray}
        setTodoArray={setTodoArray}
      />
    </ul>
  );
};

export default TodoList;
