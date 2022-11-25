import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "./actionTypes";
import { Task } from "./types";

function addTask (payload: Task) {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};

const deleteTask = () => {
  return {
    type: DELETE_TASK,
  };
};

const editTask = () => {
  return {
    type: EDIT_TASK,
  };
};

const completeTask = () => {
  return {
    type: COMPLETE_TASK,
  };
};

export { addTask, deleteTask, editTask, completeTask };
