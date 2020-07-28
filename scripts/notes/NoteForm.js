const contentTarget = document.querySelector('.noteFormContainer');

const render = () => {
  contentTarget.innerHTML = `
    <form id="note-form">
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" name="date" id="date">
      </div>
      <div class="form-group">
        <label for="criminalSelect">Suspect</label>
        <!-- this will be a CriminalSelect component -->
      </div>
      <div class="form-group">
        <label for="text">Note Text</label>
        <textarea name="text" id="text"></textarea>
      </div>
      <button id="saveNote">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  render();
};