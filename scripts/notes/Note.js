import escapeHTML from '../utilities/escapeHTML.js';

export const Note = note => {
  const { title, author, text, timestamp } = note;

  const dateObj = new Date(timestamp);
  const formattedDate = dateObj.toLocaleDateString('en-us');
  const fullDateString = dateObj.toString();

  return `
    <section class="card note">
      <div class="note__content-group">
        <h3 class="note__content note__title">${escapeHTML(title)}</h3>
      </div>
      <div class="note__content-group">
        ${text.split('\n').map(line => `<p class="note__content note__text">${escapeHTML(line)}</p>`).join('')}
      </div>
      <div class="note--footer">
        <div class="note__content-group">
          <p class="note__label">Author</p>
          <p class="note__content note__author">${escapeHTML(author)}</p>
        </div>
        <div class="note__content-group">
          <p class="note__label">Date</p>
          <p title="${escapeHTML(fullDateString)}" class="note__content note__date">${escapeHTML(formattedDate)}</p>
        </div>
      </div>
    </section>
  `;
};