import React, { useState } from "react";

const InputFeild = ({ addItem }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleButtonClick = () => {
    addItem(taskInput);
    setTaskInput("");
  };
  return (
    <div>
      <input
        value={taskInput}
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
        type="text"
        placeholder="Add a new task"
      ></input>
      <button onClick={handleButtonClick}>Add</button>
    </div>
  );
};

export default InputFeild;
