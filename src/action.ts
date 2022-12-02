import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "./actionTypes";
import { Task } from "./types";

function addTask (payload: Task) {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};

function deleteTask (payload: Task) {
  return {
    type: DELETE_TASK,
    payload: payload,
  };
};

function editTask (payload: Task){
  return {
    type: EDIT_TASK,
    payload: payload,
  };
};

function completeTask (payload: Task){
  return {
    type: COMPLETE_TASK,
    payload: payload,
  };
};

export { addTask, deleteTask, editTask, completeTask };
