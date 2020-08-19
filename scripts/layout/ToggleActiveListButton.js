const contentTarget = document.querySelector('.toggleActiveListButtonContainer');
const eventHub = document.querySelector('.container');

const lists = [ 
  { name: 'criminalList', displayName: 'Criminal List' },
  { name: 'witnessList', displayName: 'Witness List' },
  { name: 'facilityList', displayName: 'Facility List' }
];
let activeListIndex = 0;

contentTarget.addEventListener('click', event => {
  if(event.target.id === 'activeListToggle') {
    activeListIndex = getNextListIndex();
    const listToDisplay = lists[activeListIndex];

    const criminalsOrWitnessesToggled = new CustomEvent('listChanged', {
      detail: { listToDisplay: listToDisplay.name }
    });
    eventHub.dispatchEvent(criminalsOrWitnessesToggled);

    render();
  }
});

const render = () => {
  contentTarget.innerHTML = `<button id="activeListToggle" class="btn toggleActiveListButton toggleActiveListButton--${lists[activeListIndex].name}">Show ${lists[getNextListIndex()].displayName}</button>`;
}

export const ToggleActiveListButton = () => {
  render();
};

const getNextListIndex = () => (activeListIndex + 1) % lists.length;