import { createStore } from "redux";
import reducer from "./reducer";
import { Task } from "./types";

const initialState = {
  tasks: [  ],
  isLoading: false,
  
};

const store = createStore(reducer, initialState);

export default store;
