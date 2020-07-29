const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.content--right');

eventHub.addEventListener('notesToggled', event => {
  const { shouldHideNotes } = event.detail;

  if(shouldHideNotes) {
    contentTarget.classList.add('hide');
  }
  else {
    contentTarget.classList.remove('hide');
  }
});