import { saveNote } from './NoteProvider.js';

const contentTarget = document.querySelector('.noteFormContainer');
const eventHub = document.querySelector('.container');

/**
 * Listen for form submit, build note object with keys = names of form inputs, values = values of those inputs, save the note via API
 */
contentTarget.addEventListener('submit', event => {
  if(event.target.id === 'note-form') {
    event.preventDefault();

    const note = {
      timestamp: Date.now()
    };

    for(const element of event.target.elements) {
      element.disabled = true;

      if(element.nodeName.toLowerCase() !== 'button') {
        note[element.name] = element.value;
      }
    }

    saveNote(note);
  }
});

const render = () => {
  contentTarget.innerHTML = `
    <h2 class="header">Create a New Note</h2>
    <form id="note-form">
      <div class="form-group">
        <label class="note-form__label" for="title">Title</label>
        <input required class="note-form__input" type="text" name="title" id="note--title" placeholder="Enter a title">
      </div>
      <div class="form-group">
        <label class="note-form__label" for="author">Author</label>
        <input required class="note-form__input" type="text" name="author" id="note--author" placeholder="Enter an author">
      </div>
      <div class="form-group">
        <label class="note-form__label" for="text">Note Text</label>
        <textarea required class="note-form__input note-form__textarea" name="text" id="note--text" placeholder="Enter your note content"></textarea>
      </div>
      <button type="submit" id="saveNote" class="btn note-form__button">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  render();
};

const hideNoteForm = () => {
  contentTarget.innerHTML = '';
}

const toggleNoteFormDisplay = () => {
  if(event.detail.shouldHideNotes) hideNoteForm();
  else NoteForm()
};

// re-render the form once the note you submitted has been succesfully saved. this will clear all form inputs and re-enable all of them.
eventHub.addEventListener('noteStateChanged', NoteForm);

eventHub.addEventListener('notesToggled', toggleNoteFormDisplay);