const contentTarget = document.querySelector('.toggleCriminalsOrWitnessesButtonContainer');
const eventHub = document.querySelector('.container');

const lists = [ 'criminalList', 'witnessList', 'facilityList' ];
let activeListIndex = 0;

contentTarget.addEventListener('click', event => {
  if(event.target.id === 'criminalsOrWitnessesToggle') {
    activeListIndex = (activeListIndex + 1) % lists.length;
    const listToDisplay = lists[activeListIndex];

    const criminalsOrWitnessesToggled = new CustomEvent('criminalsOrWitnessesToggled', {
      detail: { listToDisplay }
    });
    eventHub.dispatchEvent(criminalsOrWitnessesToggled);

    render();
  }
});

const render = () => {
  contentTarget.innerHTML = `<button id="criminalsOrWitnessesToggle" class="btn toggleCriminalsOrWitnessesButton toggleCriminalsOrWitnessesButton--${lists[activeListIndex]}">Show ${lists[(activeListIndex + 1) % lists.length]}</button>`;
}

export const ToggleCriminalsOrWitnessesButton = () => {
  render();
};