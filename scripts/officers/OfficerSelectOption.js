import escapeHTML from '../utilities/escapeHTML.js';

export const OfficerSelectOption = officer => {
  return `
    <option value="${escapeHTML(officer.id)}">${escapeHTML(officer.name)}</option>
  `;
};