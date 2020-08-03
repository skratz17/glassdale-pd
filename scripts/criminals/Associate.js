import escapeHTML from '../utilities/escapeHTML.js';

export const Associate = associate => {
  const { name, alibi } = associate;

  return `
    <li class="associate">
      <p>${escapeHTML(name)}</p>
      <p>${escapeHTML(alibi)}</p>
    </li>
  `;
};