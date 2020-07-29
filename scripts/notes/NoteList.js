import { getNotes, useNotesReverseChronological } from './NoteProvider.js';
import { Note } from './Note.js';

const contentTarget = document.querySelector('.notesContainer');
const eventHub = document.querySelector('.container');

const render = notes => {
  contentTarget.innerHTML = `
    <h2 class="header">Case Notes</h2>
    ${notes.map(Note).join('')}
  `;
};

export const NoteList = () => {
  getNotes()
    .then(() => {
      const notes = useNotesReverseChronological();
      render(notes);
    });
};

const hideNoteList = () => {
  contentTarget.innerHTML = '';
}

const toggleNoteListDisplay = event => {
  if(event.detail.shouldHideNotes) hideNoteList();
  else NoteList();
};

eventHub.addEventListener('notesToggled', toggleNoteListDisplay);
eventHub.addEventListener('noteStateChanged', NoteList);