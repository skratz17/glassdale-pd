import escapeHTML from '../utilities/escapeHTML.js';

export const Note = note => {
  const { title, author, text, timestamp } = note;

  const formattedDate = (new Date(timestamp)).toLocaleDateString('en-us');

  return `
    <section class="card note">
      <div class="note__content-group">
        <h3 class="note__content note__title">${escapeHTML(title)}</h3>
      </div>
      <div class="note__content-group">
        <p class="note__content note__text">${escapeHTML(text)}</p>
      </div>
      <div class="note--footer">
        <div class="note__content-group">
          <p class="note__label">Author</p>
          <p class="note__content note__author">${escapeHTML(author)}</p>
        </div>
        <div class="note__content-group">
          <p class="note__label">Date</p>
          <p class="note__content note__date">${escapeHTML(formattedDate)}</p>
        </div>
      </div>
    </section>
  `;
};