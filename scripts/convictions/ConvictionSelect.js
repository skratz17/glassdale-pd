import { getConvictions, useConvictionsAlphabetical } from './ConvictionProvider.js';
import { ConvictionSelectOption } from './ConvictionSelectOption.js';

const domNode = document.querySelector('.filters__crime');

export const ConvictionSelect = () => {
  getConvictions()
    .then(() => {
      const convictions = useConvictionsAlphabetical();
      render(convictions);
    });

  const render = convictionsCollection => {
    domNode.innerHTML = `
      <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
          convictionsCollection.map(ConvictionSelectOption).join('')
        }
      </select>
    `;
  };
};