import escapeHTML from '../utilities/escapeHTML.js';

export const Associate = associate => {
  const { name, alibi } = associate;

  return `
    <li class="associate">
      <p class="associate__name">${escapeHTML(name)}</p>
      <p class="associate__alibi">${escapeHTML(alibi)}</p>
    </li>
  `;
};