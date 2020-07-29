import { getNotes, useNotes } from './NoteProvider.js';
import { Note } from './Note.js';

const contentTarget = document.querySelector('.notesContainer');

const render = notes => {
  contentTarget.innerHTML = notes.map(Note).join('');
};

export const NoteList = () => {
  getNotes()
    .then(() => {
      const notes = useNotes();
      render(notes);
    });
};