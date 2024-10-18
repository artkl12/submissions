import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchVal, handleDelete }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchVal.toLowerCase())
        )
        .map((filteredPerson) => (
          <Person key={filteredPerson.name} person={filteredPerson} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default Persons;
