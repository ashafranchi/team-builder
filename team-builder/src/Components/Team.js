import React, { useState } from "react";

function Team(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    name: props.member.name,
    email: props.member.email,
    role: props.member.role,
    id: props.member.id
  });
  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    setIsEditing(!isEditing);
  };

  const updateHandler = e => {
    e.preventDefault();
    props.updateMember(input);
    setIsEditing(!isEditing);
  };

  console.log("inputs", input);
  console.log("edit", isEditing);
  if (isEditing) {
    return (
      <div>
        <h1>Edit Member</h1>
        <form onSubmit={updateHandler}>
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

          <button>Update Member</button>
        </form>
        <button onClick={handleEdit}>go back</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Name:</h2>
      <p>{props.member.name}</p>
      <h2>Email:</h2>
      <p>{props.member.email}</p>
      <h2>Role:</h2>
      <p>{props.member.role}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Team;