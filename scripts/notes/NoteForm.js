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
    <form id="note-form">
      <div class="form-group">
        <label for="title">Note Title</label>
        <input type="text" name="title" id="note--title">
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" name="author" id="note--author">
      </div>
      <div class="form-group">
        <label for="text">Note Text</label>
        <textarea name="text" id="note--text"></textarea>
      </div>
      <button type="submit" id="saveNote">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  render();
};