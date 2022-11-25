import React from "react";
import { useSelector } from "react-redux";
import TaskComponent from "./task";
import { Task } from "../types";

function List() {
  const state = useSelector((state) => state as { tasks: Task[] });

  return (
    <ul id="todos" className="todos-tasks">
      {state.tasks.map(function (task) {
        return <TaskComponent key={task.id} name={task.name} id={task.id} />;
      })}
    </ul>
  );
}

export default List;
