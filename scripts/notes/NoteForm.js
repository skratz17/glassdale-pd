import { saveNote } from './NoteProvider.js';

const contentTarget = document.querySelector('.noteFormContainer');

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
        <input class="note-form__input" type="text" name="title" id="note--title" placeholder="Enter a title">
      </div>
      <div class="form-group">
        <label class="note-form__label" for="author">Author</label>
        <input class="note-form__input" type="text" name="author" id="note--author" placeholder="Enter an author">
      </div>
      <div class="form-group">
        <label class="note-form__label" for="text">Note Text</label>
        <textarea class="note-form__input note-form__textarea" name="text" id="note--text" placeholder="Enter your note content"></textarea>
      </div>
      <button type="submit" id="saveNote" class="note-form__button">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  render();
};