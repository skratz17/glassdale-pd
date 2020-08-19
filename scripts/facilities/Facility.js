import escapeHTML from '../utilities/escapeHTML.js';

export const Facility = facility => {
  const { id, facilityName, securityLevel, capacity, criminals } = facility;
  const securityLevelValue = securityLevel.charAt(0);
  
  return `
    <section class="card facility" id="facility--${escapeHTML(id)}">
      <h3 class="facility security-level--${escapeHTML(securityLevelValue)}">${escapeHTML(facilityName)}</h3>
      <p class="facility__capacity italic">(Capacity: ${escapeHTML(capacity)})</p>
      <div class="facility__criminals-wrapper">
        <p class="facility__criminals-header">Criminals</p>
        <ul class="facility__criminals">
          ${ criminals.map(criminal => `<li>${criminal.name}</li>`).join('') }
        </ul>
      </div>
    </section>
  `;
};
 