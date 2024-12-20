import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Form from "./components/PersonForm";
import personsService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [disableButtons, setDisableButtons] = useState(false);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  
  const addPerson = (e) => {
    e.preventDefault();
    setDisableButtons(true)

    if (!newName || !newNumber) {
      alert("Fill the name and number fields");
      return;
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (existingPerson && existingPerson.number === newNumber) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace the old phone number with the new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        personsService
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
            setSuccessMessage(`${updatedPerson.name}\`s number was updated`);
            setTimeout(() => {
              setSuccessMessage(null);
              setDisableButtons(false)
            }, 3000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error("updating number error", error);
            setErrorMessage(error.request.response);
            setTimeout(() => {
              setErrorMessage(null);
              setDisableButtons(false)
            }, 3000);
            personsService.getAll().then((initialPersons) => {
              setPersons(initialPersons);
            });
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personsService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setSuccessMessage(`${returnedPerson.name} was successfully added`);
          setTimeout(() => {
            setSuccessMessage(null);
            setDisableButtons(false)
          }, 3000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setErrorMessage(error.request.response);
          setTimeout(() => {
            setErrorMessage(null);
            setDisableButtons(false)
          }, 3000);
        });
    }
  };

  const handleDelete = (id, name) => {
    setDisableButtons(true)
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setSuccessMessage(`${name} was successfully deleted`);
          setTimeout(() => {
            setSuccessMessage(null);
            setDisableButtons(false)
          }, 3000);
        })
        .catch((error) => {
          console.error("There was an error deleting the person!", error);
          setErrorMessage(error.request.response);
          setTimeout(() => {
            setErrorMessage(null);
            setDisableButtons(false)
          }, 3000);
          personsService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
          });
        });
    }
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Notification
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <Filter searchVal={searchVal} handleSearchVal={handleSearchVal} />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
      />
      <h1>Numbers</h1>
      <Persons
        persons={persons}
        searchVal={searchVal}
        handleDelete={handleDelete}
        disableButtons={disableButtons}
      />
    </>
  );
}

export default App;
