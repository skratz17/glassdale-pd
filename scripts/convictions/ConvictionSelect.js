import { getConvictions, useConvictions } from './ConvictionProvider.js';
import { ConvictionSelectOption } from './ConvictionSelectOption.js';

const domNode = document.querySelector('.filters__crime');

export const ConvictionSelect = () => {
  getConvictions()
    .then(() => {
      const convictions = useConvictions();

      const render = convictionsCollection => {
        domNode.innerHTML = `
          <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
              convictions.map(ConvictionSelectOption).join('')
            }
          </select>
        `;
      };

      render(convictions);
    });
};