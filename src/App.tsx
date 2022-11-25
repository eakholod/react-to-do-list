import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="bodyStyle">
        <div className="style1">
          <Form />
          <List />
        </div>
      </div>
    </Provider>
  );
}

export default App;
