import escapeHTML from '../utilities/escapeHTML.js';

export const Note = note => {
  const { title, author, text, timestamp } = note;

  const formattedDate = (new Date(timestamp)).toLocaleDateString('en-us');

  return `
    <section class="card note">
      <div class="note__content-group">
        <p class="note__label">Title</p>
        <p class="note__content">${escapeHTML(title)}</p>
      </div>
      <div class="note__content-group">
        <p class="note__content">${escapeHTML(text)}</p>
      </div>
      <div class="note__content-group">
        <p class="note__label">Author</p>
        <p class="note__content">${escapeHTML(author)}</p>
      </div>
      <div class="note__content-group">
        <p class="note__label">Date</p>
        <p class="note__content">${escapeHTML(formattedDate)}</p>
      </div>
    </section>
  `;
};