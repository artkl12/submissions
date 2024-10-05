import Note from "./components/Note";
import Notification from "./components/Notification";
import { useState, useEffect } from "react";
import noteService from "./services/notes";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    noteService.getAll().then((response) => setNotes(response.data));
  }, []);
  console.log("render ", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleDelete = (id) => {
    const note = notes.find((n) => n.id === id);
    axios
      .delete(`http://localhost:3001/notes/${id}`)
      .then(() => {
        setNotes(notes.filter((n) => n.id !== id));
        setSuccessMessage(`note '${note.content}' successefuly deleted`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already deleted from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService
      .update(id, changedNote)
      .then((response) => {
        setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
        setSuccessMessage(`importance of '${note.content}' changed`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already deleted from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    };

    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setSuccessMessage(`'${newNote}' was added`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      setNewNote("");
    });
  };

  return (
    <>
      <h1>Notes</h1>
      <Notification
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
            handleDelete={() => handleDelete(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
