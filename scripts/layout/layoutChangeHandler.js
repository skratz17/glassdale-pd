const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.content--right');

import { CriminalList } from '../criminals/CriminalList.js';
import { WitnessList } from '../witnesses/WitnessList.js';

eventHub.addEventListener('notesToggled', event => {
  const { shouldHideNotes } = event.detail;

  if(shouldHideNotes) {
    contentTarget.classList.add('hide');
  }
  else {
    contentTarget.classList.remove('hide');
  }
});

eventHub.addEventListener('criminalsOrWitnessesToggled', event => {
  const listToDisplay = event.detail.listToDisplay;

  if(listToDisplay === 'criminalList') {
    CriminalList(); 
  }
  else if(listToDisplay === 'witnessList') {
    WitnessList();
  }
});