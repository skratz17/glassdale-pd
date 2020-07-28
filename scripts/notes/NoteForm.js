import { saveNote } from './NoteProvider.js';

const contentTarget = document.querySelector('.noteFormContainer');

contentTarget.addEventListener('submit', event => {
  if(event.target.id === 'note-form') {
    event.preventDefault();

    const { elements } = event.target;
    const note = {};

    for(let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if(element.id === 'saveNote') continue;
      note[element.name] = element.value;
    }

    saveNote(note);
  }
});

const render = () => {
  contentTarget.innerHTML = `
    <form id="note-form">
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" name="date" id="note--date">
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