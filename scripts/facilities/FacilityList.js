import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js';
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';
import { Facility } from './Facility.js';
import { FacilitiesLegend } from './FacilitiesLegend.js';

const contentTarget = document.querySelector('.mainListContainer');

const render = (facilities, criminals, criminalFacilities) => {
  facilities.forEach(facility => {
    facility.criminals = criminalFacilities
      .filter(criminalFacility => criminalFacility.facilityId === facility.id)
      .map(criminalFacility => criminals.find(criminal => criminal.id === criminalFacility.criminalId))
  });

  contentTarget.innerHTML = `
    ${ FacilitiesLegend() }
    <article class="list facilityList">
      ${ facilities.map(Facility).join('') }
    </article>
  `
};

export const FacilityList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      const facilities = useFacilities();
      const criminalFacilities = useCriminalFacilities();
      const criminals = useCriminals();
      render(facilities, criminals, criminalFacilities);
    })
};