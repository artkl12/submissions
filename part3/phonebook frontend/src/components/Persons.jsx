import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchVal, handleDelete, disableButtons }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchVal.toLowerCase())
        )
        .map((filteredPerson) => (
          <Person
            key={filteredPerson.name}
            person={filteredPerson}
            handleDelete={handleDelete}
            disableButtons={disableButtons}
          />
        ))}
    </div>
  );
};

export default Persons;
