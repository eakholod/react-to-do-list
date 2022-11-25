import React from "react";
import { Task } from "../types";

function TaskComponent(props: Task) {
  return (
    <li>
      <div className="todoContent">{props.name}</div>
      <div>
        <button type="button" className="delete-button">
          DELETE
        </button>
        <button type="button" className="complete-button">
          COMPLETE
        </button>
        <button type="button" className="edit-button">
          EDIT
        </button>
      </div>
    </li>
  );
}

export default TaskComponent;