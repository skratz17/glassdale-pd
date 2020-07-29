import escapeHTML from '../utilities/escapeHTML.js';

export const OfficerSelectOption = officer => {
  const { id, name } = officer;

  return `
    <option value="${escapeHTML(id)}">${escapeHTML(name)}</option>
  `;
};