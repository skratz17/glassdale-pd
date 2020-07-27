export const OfficerSelectOption = officer => {
  return `
    <option value="${officer.id}">${officer.name}</option>
  `;
};