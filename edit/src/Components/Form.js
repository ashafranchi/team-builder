import React, { useState } from "react";

function Form (props) {
    const [input, setInput] = useState({
        event: "",
        date: "",
        location: "",
        id: null
      });
  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addEvent({ ...input, id: Math.random() });
    setInput({
      event: "",
      date: "",
      location: "",
      id: null
    });
  };
  return (
    <div>
      <h1>Add an Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event">
            Event:{" "}
            <input
              type="text"
              value={input.event}
              name="event"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="date">
            Date:{" "}
            <input
              type="text"
              value={input.date}
              name="date"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="location">
            Location:{" "}
            <input
              type="text"
              value={input.location}
              name="location"
              onChange={handleInput}
            />
          </label>
        </div>

        <button>Add Event</button>
      </form>
    </div>
  );
}

export default Form;
