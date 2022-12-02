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
      const tasksWithNewTask = state.tasks.concat(action.payload);
      return {
        ...state,
        tasks: tasksWithNewTask,
      };

    case DELETE_TASK:
      const tasksWithDeletedTask = state.tasks.filter(function (currentTask) {
        if (currentTask.id !== action.payload.id) return true;
        else return false;
      });
      return {
        ...state,
        tasks: tasksWithDeletedTask,
      };

    case EDIT_TASK:
      const tasksWithEditedTask = state.tasks.map(function (currentTask) {
        if(currentTask.id === action.payload.id)
        return {...currentTask, name:action.payload.name}
        else return currentTask;
      })
      return { 
        ...state,
        tasks: tasksWithEditedTask,
      
      }

    case COMPLETE_TASK:
      const tasksWithCompletedTask = state.tasks.map(function (currentTask) {
        const toggleIsDone = !currentTask.isDone;
        if (currentTask.id === action.payload.id)
          return { ...currentTask, isDone: toggleIsDone };
        else return currentTask;
      });
      return {
        ...state,
        tasks: tasksWithCompletedTask,
      };

    default:
      return state;
  }
};
