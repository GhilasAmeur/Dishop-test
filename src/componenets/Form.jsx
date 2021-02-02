import React, { useState } from "react";

function Form({ propsForm }) {
  const [input, setInput] = useState("");

  const onChange = (event) => {
    const myInput = event.target.value;
    setInput(myInput);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit qui vient de Form");
    propsForm(input);
    setInput("");
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col-md-9 go-right" onSubmit={onSubmit}>
          <h2>Rechercher un film</h2>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Rechercher "
              value={input}
              onChange={onChange}
            />

            <button
              type="submit"
              className="btn btn-success col-md-3 mt-1 pull-right"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
