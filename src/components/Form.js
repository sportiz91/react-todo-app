import React from "react";

const Form = ({ inputText, setInputText, setTodoArray, setStatus, status }) => {
  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    setTodoArray((prevArray) => {
      return [
        ...prevArray,
        {
          name: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ];
    });

    setInputText("");
    e.preventDefault();
  }

  function handleSelectChange(e) {
    setStatus(e.target.value);
  }

  return (
    <div className="div-new-todo">
      <form onSubmit={handleSubmit} className="form-new-todo">
        <div className="input-btn-new-todo">
          <input
            type="text"
            onChange={handleChange}
            className="input-new-todo"
            value={inputText}
          />

          <button className="btn btn-new-todo" type="submit">
            <i className="fas fa-plus-square fa-lg"></i>
          </button>
        </div>

        <div className="divselect-new-todo">
          <select
            onChange={handleSelectChange}
            className="select-new-todo"
            value={status}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
