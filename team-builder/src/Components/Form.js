import React, { useState } from "react";

function Form (props) {
    const [input, setInput] = useState({
        name: "",
        email: "",
        role: "",
        id: null
      });
  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMember({ ...input, id: Math.random() });
    setInput({
      name: "",
      email: "",
      role: "",
      id: null
    });
  };
  return (
    <div>
      <h1>Add a Member</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="role">
            Role:{" "}
            <input
              type="text"
              value={input.role}
              name="role"
              onChange={handleInput}
            />
          </label>
        </div>

        <button>Add Member</button>
      </form>
    </div>
  );
}

export default Form;
