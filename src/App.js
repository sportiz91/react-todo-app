import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [status, setStatus] = useState("all");
  const INITIAL_ARRAY_KEY = "initialArray";
  const INITIAL_STATUS_KEY = "initialStatus";

  useEffect(() => {
    const loadStatus = localStorage.getItem(INITIAL_STATUS_KEY);
    const loadArray = JSON.parse(localStorage.getItem(INITIAL_ARRAY_KEY));
    console.log(loadStatus);
    console.log(loadArray);

    setStatus(loadStatus);
    setTodoArray(loadArray);
  }, []);

  useEffect(() => {
    switch (status) {
      case "all":
        setFilteredArray([...todoArray]);
        break;
      case "completed":
        setFilteredArray(
          todoArray.filter((item) => {
            return item.completed;
          })
        );
        break;

      case "uncompleted":
        setFilteredArray(
          todoArray.filter((item) => {
            return item.completed === false;
          })
        );
        break;
      default:
        setFilteredArray([...todoArray]);
    }

    localStorage.setItem(INITIAL_STATUS_KEY, status);
    localStorage.setItem(INITIAL_ARRAY_KEY, JSON.stringify(todoArray));
  }, [status, todoArray]);

  return (
    <div className="App">
      <Header />

      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodoArray={setTodoArray}
        setStatus={setStatus}
        status={status}
      />

      {filteredArray.map((todo, index) => {
        return (
          <TodoList
            name={todo.name}
            key={todo.id}
            id={todo.id}
            todo={todo}
            todoArray={todoArray}
            setTodoArray={setTodoArray}
          />
        );
      })}
    </div>
  );
}

export default App;
