import escapeHTML from '../utilities/escapeHTML.js';

export const ConvictionSelectOption = conviction => {
  const { id, name } = conviction;

  return `<option value="${escapeHTML(id)}">${escapeHTML(name)}</option>`;
};
  