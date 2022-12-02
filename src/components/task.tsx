import React from "react";
import { Task } from "../types";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask, editTask } from "../action";
import Checkmark from "./checkmark";

function TaskComponent(props: Task) {
  const dispatch = useDispatch();

  function handleEdit () {
    const updatedName = prompt("Enter edited task", props.name);
    if (updatedName !== null) {dispatch(editTask({id: props.id, name:updatedName}))}
  };

  return (
    <li>
      <div
        className="todoContent"
        // style={{  props.isDone ? "checkmark" : "" }}
        >
        {props.isDone ? <Checkmark/> : " "}
        {props.name}
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={function () {
            dispatch(deleteTask(props));
          }}
        >
          DELETE
        </button>

        <button
          type="button"
          className="complete-button"
          onClick={function () {
            dispatch(completeTask(props));
          }}
        >
          COMPLETE
        </button>

        <button type="button" className="edit-button" onClick={handleEdit}>
          EDIT
        </button>
      </div>
    </li>
  );
}

export default TaskComponent;
