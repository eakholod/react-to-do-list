import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bodyStyle">
      <div className="style1">
        <form id="todoForm">
          <label htmlFor="tdo" className="label-area">
            To Do List
          </label>
          <br />
          <input type="text" className="input-area" id="tdo" name="tdo" />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <ul id="todos" className="todos-tasks">
          <li>
            <div className="todoContent">test 1</div>
            <div>
              <button type="button" className="delete-button">
                DELETE
              </button>
              <button type="button" className="complete-button">
                COMPLETE
              </button>
              <button type="button" className="edit-button">
                EDIT
              </button>
            </div>
          </li>

          <li>
            <div className="todoContent">test 3</div>
            <div>
              <button type="button" className="delete-button">
                DELETE
              </button>
              <button type="button" className="complete-button">
                COMPLETE
              </button>
              <button type="button" className="edit-button">
                EDIT
              </button>
            </div>
          </li>
          <li> 
            <div className="todoContent">test 2</div>
            <div>
              <button type="button" className="delete-button">
                DELETE 
              </button>
              <button type="button" className="complete-button">
                COMPLETE 
              </button>
              <button type="button" className="edit-button">
                EDIT 
              </button>
            </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
