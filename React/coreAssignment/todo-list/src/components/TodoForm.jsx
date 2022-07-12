import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const createTask = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={createTask}>
        <label><h3>New Task: </h3></label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button><h3>Add Task</h3></button>
      </form>
    </div>
  );
};

export default TodoForm;
