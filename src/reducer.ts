import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "./actionTypes";
import { Action, Task } from "./types";

type InitialState = {
  isLoading: boolean;
  tasks: Task[];
};

const initialState: InitialState = {
  isLoading: false,
  tasks: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasks = state.tasks.concat(action.payload);
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      return state;
    case EDIT_TASK:
      return state;
    case COMPLETE_TASK:
      return state;
    default:
      return state;
  }
};
