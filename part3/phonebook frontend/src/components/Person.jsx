import React from "react";

const Person = ({ person, handleDelete, disableButtons }) => {  
    return (
      <p key={person.name}>
        {person.name} {person.number} 
        <button onClick={() => handleDelete(person.id, person.name)} disabled={disableButtons}>Delete</button>
      </p>
    );
};

export default Person;
