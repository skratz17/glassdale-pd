import escapeHTML from '../utilities/escapeHTML.js';

export const Criminal = criminal => {
  const { id, name, age, conviction, incarceration } = criminal;
  const { start, end } = incarceration;

  const formattedStart = new Date(start).toLocaleDateString('en-us');
  const formattedEnd = new Date(end).toLocaleDateString('en-us');

  return `
    <section class="criminal" id="criminal--${escapeHTML(id)}">
      <h3 class="criminal__name">${escapeHTML(name)}</h3>
      <p class="criminal__info-group">
        <span class="criminal__info-group-label">Age</span>
        <span class="criminal__info-group-content">${escapeHTML(age)}</span>
      </p>
      <p class="criminal__info-group">
        <span class="criminal__info-group-label">Crime</span>
        <span class="criminal__info-group-content">${escapeHTML(conviction)}</span>
      </p>
      <p class="criminal__info-group">
        <span class="criminal__info-group-label">Term start</span>
        <span class="criminal__info-group-content">${escapeHTML(formattedStart)}</span>
      </p>
      <p class="criminal__info-group">
        <span class="criminal__info-group-label">Term end</span>
        <span class="criminal__info-group-content">${escapeHTML(formattedEnd)}</span>
      </p>
    </section>
  `;
};