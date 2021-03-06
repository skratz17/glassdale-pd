import { saveNote } from './NoteProvider.js';
import { getCriminals, useCriminalsAlphabetized } from '../criminals/CriminalProvider.js';
import validator from './noteFormValidator.js';

const contentTarget = document.querySelector('.noteFormContainer');
const eventHub = document.querySelector('.container');

contentTarget.addEventListener('submit', event => {
  if(event.target.id === 'note-form') {
    const formElement = event.target;

    event.preventDefault();

    const note = createNoteObjectFromFormData(formElement.elements);

    const errors = validator.validate(note);
    renderErrors(errors);

    if(errors.length === 0) {
      disableForm(formElement);
      saveNote(note);
    }
  }
});

const render = criminals => {
  contentTarget.innerHTML = `
    <h2 class="header">Create a New Note</h2>
    <form id="note-form">
      <div class="form-group">
        <ul class="note-form__errors note-form__title-errors"></ul>
        <label class="note-form__label" for="title">Title</label>
        <input class="note-form__input" type="text" name="title" id="note--title" placeholder="Enter a title">
      </div>
      <div class="form-group">
        <ul class="note-form__errors note-form__author-errors"></ul>
        <label class="note-form__label" for="author">Author</label>
        <input class="note-form__input" type="text" name="author" id="note--author" placeholder="Enter an author">
      </div>
      <div class="form-group">
        <ul class="note-form__errors note-form__criminalId-errors"></ul>
        <label class="note-form__label" for="criminalId">Criminal</label>
        <select class="note-form__criminalId" id="note--criminalId" name="criminalId">
          <option value="0">Select a criminal...</option>
          ${criminals.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <ul class="note-form__errors note-form__text-errors"></ul>
        <label class="note-form__label" for="text">Note Text</label>
        <textarea class="note-form__input note-form__textarea" name="text" id="note--text" placeholder="Enter your note content"></textarea>
      </div>
      <button type="submit" id="saveNote" class="btn note-form__button">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  getCriminals()
    .then(() => {
      const criminals = useCriminalsAlphabetized();
      render(criminals);
    });
};

const derender = () => {
  contentTarget.innerHTML = '';
}

const toggleNoteFormDisplay = event => {
  if(event.detail.shouldHideNotes) derender();
  else NoteForm()
};

const createNoteObjectFromFormData = formElements => {
  const note = {
    timestamp: Date.now()
  };

  for(const element of formElements) {
    if(element.nodeName.toLowerCase() !== 'button') {
      let valueToStore = element.value;

      if(element.name === 'criminalId') {
        valueToStore = parseInt(element.value);
      }

      note[element.name] = valueToStore;
    }
  }

  return note;
}

const renderErrors = errors => {
  clearErrors();
  errors.forEach(error => {
    const domNode = document.querySelector(`.note-form__${error.propertyName}-errors`);
    domNode.innerHTML += `<li class="error">${error.errorMessage}</li>`
  });
}

const clearErrors = () => {
  document
    .querySelectorAll('.note-form__errors')
    .forEach(domNode => domNode.innerHTML = '');
}

const disableForm = formElements => {
  for(const element of formElements) {
    element.disabled = true;
  }
}

// re-render the form once the note you submitted has been succesfully saved. this will clear all form inputs and re-enable all of them.
eventHub.addEventListener('noteStateChanged', NoteForm);

eventHub.addEventListener('notesToggled', toggleNoteFormDisplay);