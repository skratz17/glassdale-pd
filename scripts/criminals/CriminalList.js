import { getCriminals, useCriminals } from './CriminalProvider.js';
import { Criminal } from './Criminal.js';

const domNode = document.querySelector('.criminalsContainer');

const render = criminals => {
  const criminalsHTML = criminals.map(Criminal).join('');

  domNode.innerHTML = `
    <h2 class="list-header">Glassdale PD Convicted Criminals</h2>
    <article class="criminalList">
      ${criminalsHTML}
    </article>
  `;
};

export const CriminalList = () => {
  getCriminals()
    .then(() => {
      const criminals = useCriminals();
      render(criminals);
    });
};