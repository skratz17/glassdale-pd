import { getCriminals, useCriminals } from './CriminalProvider.js';
import { useConvictions } from '../convictions/ConvictionProvider.js';
import { useOfficers } from '../officers/OfficerProvider.js';
import { Criminal } from './Criminal.js';

const domNode = document.querySelector('.criminalsContainer');
const eventHub = document.querySelector('.container');

eventHub.addEventListener('convictionChanged', event => {
  const convictions = useConvictions();
  const conviction = convictions.find(conviction => conviction.id === event.detail.convictionId);

  const criminals = useCriminals();
  const filteredCriminals = criminals.filter(criminal => criminal.conviction === conviction.name);

  render(filteredCriminals);
});

eventHub.addEventListener('officerChanged', event => {
  const officers = useOfficers();
  const officer = officers.find(officer => officer.id === event.detail.officerId);

  const criminals = useCriminals();
  const filteredCriminals = criminals.filter(criminal => criminal.arrestingOfficer === officer.name);

  render(filteredCriminals);
});

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