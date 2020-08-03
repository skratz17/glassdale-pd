const contentTarget = document.querySelector('.toggleNotesDisplayButtonContainer');
const eventHub = document.querySelector('.container');

let areNotesHidden = true;

contentTarget.addEventListener('click', event => {
  if(event.target.id === 'notesToggle') {
    areNotesHidden = !areNotesHidden;

    const notesToggled = new CustomEvent('notesToggled', {
      detail: {
        shouldHideNotes: areNotesHidden
      }
    });
    eventHub.dispatchEvent(notesToggled);

    render();
  }
});

const render = () => {
  contentTarget.innerHTML = `<button id="notesToggle" class="btn toggleNotesDisplayButton toggleNotesDisplayButton--${areNotesHidden ? 'show' : 'hide'}">${areNotesHidden ? 'Show' : 'Hide'} Notes</button>`;
};

export const ToggleNotesDisplayButton = () => {
  render();
};