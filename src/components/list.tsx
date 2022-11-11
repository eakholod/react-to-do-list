import React from "react";
import Task from "./task";

function List() {
  return (
    <ul id="todos" className="todos-tasks">
      <Task name="Task 1"/>
      <Task name="Task 2"/>
      <Task name="Task 3"/>
    </ul>
  );
}

export default List;
