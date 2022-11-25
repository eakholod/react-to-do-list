import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../action";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const id = uuidv4();
    dispatch(addTask({ name: name, id: id }));
  }

  return (
    <form id="todoForm" onSubmit={handleSubmit}>
      <label htmlFor="tdo" className="label-area">
        To Do List
      </label>
      <br />
      <input
        type="text"
        className="input-area"
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />
      <br />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default Form;
