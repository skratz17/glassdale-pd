import { getOfficers, useOfficers } from './OfficerProvider.js';
import { OfficerSelectOption } from './OfficerSelectOption.js';

const contentTarget = document.querySelector('.filters__officer');
const eventHub = document.querySelector('.container');

const render = officers => {
  contentTarget.innerHTML = `
    <select class="dropdown">
      <option value="0">Select an officer...</option>
      ${ officers.map(OfficerSelectOption).join('') }
    </select>
  `
};

export const OfficerSelect = () => {
  getOfficers()
    .then(() => {
      const officers = useOfficers();
      render(officers);
    });
};