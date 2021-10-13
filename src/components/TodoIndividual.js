import React, { useState } from "react";

const TodoIndividual = ({ name, id, todo, todoArray, setTodoArray }) => {
  function handleCheck() {
    setTodoArray(
      todoArray.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }; //Only if the id matches, property completed changes to the opposite
        }
        return item; //because we are looping through every item in the array and changing state, we have to return every item of the map loop.
        //In this return, new completed status will be considered.
      })
    );
  }

  function handleTrash() {
    setTodoArray(
      todoArray.filter((item) => {
        return item.id !== todo.id;
      })
    );
  }

  return (
    <div className={`todo ${todo.completed && "todo-checked"}`}>
      <li className={todo.completed && "all-todos-li-checked"}>{name}</li>
      <button onClick={handleCheck} className="btn check">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleTrash} className="btn trash">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoIndividual;
