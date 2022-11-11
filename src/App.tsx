import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <div className="bodyStyle">
      <div className="style1">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
