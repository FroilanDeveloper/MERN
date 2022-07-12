import React, { useState } from "react";

const TodoTask = ({ task, handleTaskDelete }) => {
  const [completed, setComplete] = useState(false);
  return (
    <div>
      <h3 style={{ textDecoration: completed && "line-through" }}>{task}</h3>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setComplete(e.target.checked)}
      />
      <button onClick={handleTaskDelete}><h3>Delete</h3></button>
    </div>
  );
};

export default TodoTask;
