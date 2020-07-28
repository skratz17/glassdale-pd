let notes = [];

export const useNotes = () => notes.slice();

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(res => res.json())
    .then(notesData => notes = notesData);
};