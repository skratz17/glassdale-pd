import { getWitnesses, useWitnesses } from './WitnessProvider.js';
import { Witness } from './Witness.js';

const domNode = document.querySelector('.mainListContainer');

const render = witnesses => {
  domNode.innerHTML = `
    <article class="list witnessList">
      ${witnesses.map(Witness).join('')}
    </article>
  `;
};

export const WitnessList = () => {
  getWitnesses()
    .then(() => {
      const witnesses = useWitnesses();
      render(witnesses);
    });
};