import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes";

export type Task = {
  name?: string;
  isDone?: boolean;
  id: string;
};

export type Action = {
  type:
    | typeof ADD_TASK
    | typeof DELETE_TASK
    | typeof EDIT_TASK
    | typeof COMPLETE_TASK;
  payload: Task;
};
