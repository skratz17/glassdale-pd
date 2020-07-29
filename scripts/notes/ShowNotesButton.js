const contentTarget = document.querySelector('.showNotesButtonContainer');
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
  contentTarget.innerHTML = `<button id="notesToggle" class="btn showNotesButton showNotesButton--${areNotesHidden ? 'show' : 'hide'}">${areNotesHidden ? 'Show' : 'Hide'} Notes</button>`;
};

export const ShowNotesButton = () => {
  render();
};