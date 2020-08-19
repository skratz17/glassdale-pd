import escapeHTML from '../utilities/escapeHTML.js';

export const Facility = facility => {
  const { id, facilityName, securityLevel, capacity, criminals } = facility;
  
  return `
    <section class="card facility" id="facility--${escapeHTML(id)}">
      <h3 class="facility">${escapeHTML(facilityName)}</h3>
      <ul class="facility__criminals">
        ${ criminals.map(criminal => `<li>${criminal.name}</li>`).join('') }
      </ul>
    </section>
  `;
};
  