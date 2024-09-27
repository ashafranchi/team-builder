import React, { useState } from "react";

function Events(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    name: props.event.event,
    email: props.event.date,
    role: props.event.location,
    id: props.event.id
  });
  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    setIsEditing(!isEditing);
  };

  const updateHandler = e => {
    e.preventDefault();
    props.updateEvent(input);
    setIsEditing(!isEditing);
  };

  console.log("inputs", input);
  console.log("edit", isEditing);
  if (isEditing) {
    return (
      <div>
        <h1>Edit Event</h1>
        <form onSubmit={updateHandler}>
          <div>
            <label htmlFor="event">
             Event: {" "}
              <input
                type="text"
                value={input.event}
                event="event"
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
                value={input.role}
                name="location"
                onChange={handleInput}
              />
            </label>
          </div>

          <button>Update Event</button>
        </form>
        <button onClick={handleEdit}>go back</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Event:</h2>
      <p>{props.event.event}</p>
      <h2>Date:</h2>
      <p>{props.event.date}</p>
      <h2>Location:</h2>
      <p>{props.event.location}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Events;