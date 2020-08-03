const contentTarget = document.querySelector('.toggleCriminalsOrWitnessesButtonContainer');
const eventHub = document.querySelector('.container');

let isCriminalsListDisplayed = true;

contentTarget.addEventListener('click', event => {
  if(event.target.id === 'criminalsOrWitnessesToggle') {
    isCriminalsListDisplayed = !isCriminalsListDisplayed;

    let listToDisplay;
    if(isCriminalsListDisplayed) {
      listToDisplay = 'criminalList';
    }
    else {
      listToDisplay = 'witnessList';
    }

    const criminalsOrWitnessesToggled = new CustomEvent('criminalsOrWitnessesToggled', {
      detail: { listToDisplay }
    });
    eventHub.dispatchEvent(criminalsOrWitnessesToggled);

    render();
  }
});

const render = () => {
  contentTarget.innerHTML = `<button id="criminalsOrWitnessesToggle" class="btn criminalsOrWitnessesButton criminalsOrWitnessesButton--${isCriminalsListDisplayed ? 'criminals' : 'witnesses'}">Show ${isCriminalsListDisplayed ? 'Witnesses' : 'Criminals'}</button>`;
}

export const ToggleCriminalsOrWitnessesButton = () => {
  render();
};