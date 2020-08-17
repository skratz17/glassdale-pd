const eventHub = document.querySelector('.container');

let notes = [];

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent('noteStateChanged');
  eventHub.dispatchEvent(noteStateChangedEvent);
};

export const useNotes = () => notes.slice();

export const useNotesReverseChronological = () => {
  return notes
    .slice()
    .sort((a, b) => b.timestamp - a.timestamp);
};

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(res => res.json())
    .then(notesData => notes = notesData);
};

export const saveNote = note => {
  fetch('http://localhost:8088/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};

export const deleteNote = id => {
  fetch(`http://localhost:8088/notes/${id}`, {
    method: 'DELETE'
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};