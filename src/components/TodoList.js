import React from "react";
import TodoIndividual from "./TodoIndividual";
import { CSSTransition } from "react-transition-group";

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
