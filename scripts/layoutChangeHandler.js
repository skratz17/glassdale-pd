/**
 * I hate the existence of this file but I don't know how I should be modifying the entire .content--right area of the page aside from it existing in its own layout-focused JS file... there is probably a better way to do this!
 */

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