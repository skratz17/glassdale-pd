/**
 * Module to listen for large-scale DOM modifications - eg showing or hiding the right column of the page, or determining which list should be rendered in the mainListContainer DOM node
 */
import { CriminalList } from '../criminals/CriminalList.js';
import { WitnessList } from '../witnesses/WitnessList.js';

const eventHub = document.querySelector('.container');
const rightColumnDOMNode = document.querySelector('.content--right');
const filtersDOMNode = document.querySelector('.filters');

/**
 * Listen for the notes toggled event, hide or show the right column of the page depending on hide or show selection
 */
eventHub.addEventListener('notesToggled', event => {
  const { shouldHideNotes } = event.detail;

  if(shouldHideNotes) {
    rightColumnDOMNode.classList.add('hide');
  }
  else {
    rightColumnDOMNode.classList.remove('hide');
  }
});

/**
 * Listen for the criminals or witness list toggle event - render the proper list and hide/show the filters depending on which list chosen
 */
eventHub.addEventListener('criminalsOrWitnessesToggled', event => {
  const listToDisplay = event.detail.listToDisplay;

  if(listToDisplay === 'criminalList') {
    CriminalList(); 
    filtersDOMNode.classList.remove('hide');
  }
  else if(listToDisplay === 'witnessList') {
    WitnessList();
    filtersDOMNode.classList.add('hide');
  }
});