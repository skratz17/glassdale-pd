import { getCriminals, useCriminals } from './CriminalProvider.js';
import { useConvictions } from '../convictions/ConvictionProvider.js';
import { useOfficers } from '../officers/OfficerProvider.js';
import { Criminal } from './Criminal.js';

const domNode = document.querySelector('.criminalsContainer');
const eventHub = document.querySelector('.container');

// keeps track of which filters are currently active under key of type of filter
// i.e. - activeFilters.conviction = <function to filter criminal array by selected conviction>
const activeFilters = {};

eventHub.addEventListener('convictionChanged', event => {
  const convictions = useConvictions();
  const conviction = convictions.find(conviction => conviction.id === event.detail.convictionId);

  activeFilters.conviction = criminal => criminal.conviction === conviction.name;

  render(getFilteredCriminals());
});

eventHub.addEventListener('officerChanged', event => {
  const officers = useOfficers();
  const officer = officers.find(officer => officer.id === event.detail.officerId);

  activeFilters.officer = criminal => criminal.arrestingOfficer === officer.name;

  render(getFilteredCriminals());
});

/**
 * Filter down the criminals array based on all filters currently active.
 * Returns array of criminals after having been filtered by all active filters.
 */
const getFilteredCriminals = () => {
  let filteredCriminals = useCriminals();

  Object.keys(activeFilters).forEach(filterType => 
    filteredCriminals = filteredCriminals.filter(activeFilters[filterType])
  );

  return filteredCriminals;
};

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