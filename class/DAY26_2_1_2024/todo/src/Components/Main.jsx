// Main.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, password } = location.state || {};

  const goToProfile = () => {
    navigate("/profile", { state: { username, password } });
  };

  const [userNotes, setUserNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editedNoteIndex, setEditedNoteIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUserNotes = JSON.parse(localStorage.getItem(`${username}-${password}-notes`)) || [];
    setUserNotes(storedUserNotes);
  }, [username, password]);

  const addNote = () => {
    if (newNote.trim() === "") return;

    const updatedNotes = [...userNotes, { text: newNote, completed: false }];

    localStorage.setItem(`${username}-${password}-notes`, JSON.stringify(updatedNotes));

    setUserNotes(updatedNotes);
    setNewNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = userNotes.filter((_, i) => i !== index);

    localStorage.setItem(`${username}-${password}-notes`, JSON.stringify(updatedNotes));

    setUserNotes(updatedNotes);
  };

  const editNote = (index) => {
    setEditedNoteIndex(index);
    setNewNote(userNotes[index].text);
  };

  const toggleCompleted = (index) => {
    const updatedNotes = userNotes.map((note, i) =>
      i === index ? { ...note, completed: !note.completed } : note
    );

    localStorage.setItem(`${username}-${password}-notes`, JSON.stringify(updatedNotes));

    setUserNotes(updatedNotes);
  };

  const sortNotes = () => {
    const sortedNotes = [...userNotes].sort();

    localStorage.setItem(`${username}-${password}-notes`, JSON.stringify(sortedNotes));

    setUserNotes(sortedNotes);
  };

  const searchNotes = (query) => {
    setSearchQuery(query);
  };

  const filteredNotes = userNotes.filter((note) => {
    const lowerCaseText = note?.text?.toLowerCase() || '';
    return lowerCaseText.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div>
        <p>{username}</p>
        <button onClick={goToProfile}>Edit Profile</button>
      </div>
      <div>
        <h2>Notes</h2>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>{editedNoteIndex !== null ? "Edit" : "Add"}</button>
        <button onClick={sortNotes}>Sort</button>
        <input
          type="text"
          placeholder="Search notes"
          value={searchQuery}
          onChange={(e) => searchNotes(e.target.value)}
        />
        <ul>
          {filteredNotes.map((note, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
                {note.text}
              </span>
              <button onClick={() => editNote(index)}>Edit</button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
