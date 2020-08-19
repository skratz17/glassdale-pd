import { getCriminals, useCriminals } from './CriminalProvider.js';
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js';

import { useConvictions } from '../convictions/ConvictionProvider.js';
import { useOfficers } from '../officers/OfficerProvider.js';
import { Criminal } from './Criminal.js';

const domNode = document.querySelector('.mainListContainer');
const eventHub = document.querySelector('.container');

// keeps track of which filters are currently active under key of type of filter
// i.e. - activeFilters.conviction = <function to filter criminal array by selected conviction>
const activeFilters = {};

eventHub.addEventListener('convictionChanged', event => {
  const convictions = useConvictions();
  const foundConviction = convictions.find(conviction => conviction.id === event.detail.convictionId);

  if(foundConviction) {
    activeFilters.conviction = criminal => criminal.conviction === foundConviction.name;
  }
  else {
    delete activeFilters.conviction;
  }

  render(getFilteredCriminals());
});

eventHub.addEventListener('officerChanged', event => {
  const officers = useOfficers();
  const foundOfficer = officers.find(officer => officer.id === event.detail.officerId);

  if(foundOfficer) {
    activeFilters.officer = criminal => criminal.arrestingOfficer === foundOfficer.name;
  }
  else {
    delete activeFilters.officer;
  }

  render(getFilteredCriminals());
});

domNode.addEventListener('click', event => {
  if(event.target.id.startsWith('associates--')) {
    event.target.classList.add('hide');

    const criminalId = event.target.id.split('--')[1];

    const associatesRequestedEvent = new CustomEvent('associatesRequested', {
      detail: { 
        criminalId: parseInt(criminalId)
      }
    });

    eventHub.dispatchEvent(associatesRequestedEvent);
  }
});

eventHub.addEventListener('associateListClosed', event => {
  const criminalId = event.detail.criminalId;

  const associatesButton = document.querySelector(`#associates--${criminalId}`);
  associatesButton.classList.remove('hide');
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

const render = (criminals, facilities, criminalFacilities) => {

  // asign new facilities property to each criminal object containing array of facility objects where they were incarcerated
  criminals.forEach(criminal => {
    criminal.facilities = criminalFacilities
      .filter(criminalFacility => criminalFacility.criminalId === criminal.id)
      .map(criminalFacility => facilities.find(facility => facility.id === criminalFacility.facilityId));
  });

  const criminalsHTML = criminals.map(Criminal).join('');

  domNode.innerHTML = `
    <details class="facilities-legend">
      <summary>Facility Name Color Legend</summary>
      <ul class="facilities-legend__list">
        <li class="criminal__facility--1">Maximum Security</li>
        <li class="criminal__facility--2">Secure Medium Security</li>
        <li class="criminal__facility--3">High Medium Security</li>
        <li class="criminal__facility--4">Medium Security</li>
        <li class="criminal__facility--5">High Minimum Security</li>
        <li class="criminal__facility--6">Minimum Security</li>
      </ul>
    </details>

    <article class="criminalList">
      ${criminalsHTML || '<p>No criminals match your filtering criteria :/</p>'}
    </article>
  `;
};

export const CriminalList = () => {
  getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
      const criminals = useCriminals();
      const facilities = useFacilities();
      const criminalFacilities = useCriminalFacilities();
      render(criminals, facilities, criminalFacilities);
    });
};