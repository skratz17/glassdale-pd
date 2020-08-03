import escapeHTML from '../utilities/escapeHTML.js';

export const Witness = witness => {
  const { id, name, statements } = witness;

  return `
    <section class="card witness" id="witness--${escapeHTML(id)}">
      <h3 class="witness__name">${escapeHTML(name)}</h3>
      <p class="witness__statements">${escapeHTML(statements)}</p>
    </section>
  `;
};