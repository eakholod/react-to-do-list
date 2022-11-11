import React from "react";

function Form() {
  return (
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
  );
}

export default Form;
