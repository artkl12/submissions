import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handleName,
  newNumber,
  handleNumber,
}) => {
  return (
    <div>
      <h1>add a new</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
