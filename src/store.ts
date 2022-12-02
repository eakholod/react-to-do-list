import { createStore } from "redux";
import reducer from "./reducer";
import { loadState, saveState } from './loadState';

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(function () {
  saveState(store.getState());
});


export default store;
