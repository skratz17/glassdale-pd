import { getCriminals, useCriminals } from './CriminalProvider.js';
import { Criminal } from './Criminal.js';

const domNode = document.querySelector('.criminalsContainer');

export const CriminalList = () => {
  getCriminals()
    .then(() => {
      const criminals = useCriminals();

      const criminalsHTML = criminals.map(Criminal).join('');

      domNode.innerHTML = criminalsHTML;
    });
};