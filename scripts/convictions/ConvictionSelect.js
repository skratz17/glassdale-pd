import { getConvictions, useConvictionsAlphabetical } from './ConvictionProvider.js';
import { ConvictionSelectOption } from './ConvictionSelectOption.js';

const contentTarget = document.querySelector('.filters__crime');
const eventHub = document.querySelector('.container');

contentTarget.addEventListener('change', event => {
  if(event.target.id === 'crimeSelect') {
    const convictionId = parseInt(event.target.value);

    const convictionChangedEvent = new CustomEvent('convictionChanged', {
      detail: { convictionId }
    });

    eventHub.dispatchEvent(convictionChangedEvent);
  }
});

const render = convictions => {
  contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
      <option value="0">Select a crime...</option>
      ${
        convictions.map(ConvictionSelectOption).join('')
      }
    </select>
  `;
};

export const ConvictionSelect = () => {
  getConvictions()
    .then(() => {
      const convictions = useConvictionsAlphabetical();
      render(convictions);
    });
};