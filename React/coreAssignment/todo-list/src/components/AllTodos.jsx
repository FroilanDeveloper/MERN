import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";

const AllTodos = () => {
  const [taskList, setTaskList] = useState([]); 
  //      variable    function to set the State of the variable
  // setting up the useState as an empty array

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleTaskDelete = (delIdx) => {
    const filteredTodos = taskList.filter((tasked, i) => i !== delIdx);
    setTaskList(filteredTodos);
  };
  return (
    <div>
      <TodoForm addTask={addTask} />
      {taskList.map((tasked, i) => 
        <TodoTask handleTaskDelete={() => handleTaskDelete(i)} task={tasked} />
      )}
    </div>
  );
};

export default AllTodos;
