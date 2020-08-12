import { getNotes, useNotesReverseChronological } from './NoteProvider.js';
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';
import { Note } from './Note.js';

const contentTarget = document.querySelector('.notesContainer');
const eventHub = document.querySelector('.container');

const render = (notes, criminals) => {
  contentTarget.innerHTML = `
    <h2 class="header">Case Notes</h2>
    ${
      notes
        .map(note => {
          const criminal = criminals.find(criminal => criminal.id === note.criminalId);
          return Note(note, criminal);
        })
        .join('')
    }
  `;
};

export const NoteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notes = useNotesReverseChronological();
      const criminals = useCriminals();
      render(notes, criminals);
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