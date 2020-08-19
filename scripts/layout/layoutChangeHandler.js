/**
 * Module to listen for large-scale DOM modifications - eg showing or hiding the right column of the page, or determining which list should be rendered in the mainListContainer DOM node
 */
import { CriminalList } from '../criminals/CriminalList.js';
import { WitnessList } from '../witnesses/WitnessList.js';
import { FacilityList } from '../facilities/FacilityList.js';

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
 * Listen for the list change event - swap out which list is currently being rendered in the main app area
 */
eventHub.addEventListener('listChanged', event => {
  const listToDisplay = event.detail.listToDisplay;

  if(listToDisplay === 'criminalList') {
    CriminalList(); 
    filtersDOMNode.classList.remove('hide');
  }
  else if(listToDisplay === 'witnessList') {
    WitnessList();
    filtersDOMNode.classList.add('hide');
  }
  else if(listToDisplay === 'facilityList') {
    FacilityList();
    filtersDOMNode.classList.add('hide');
  }
});