import { getWitnesses, useWitnesses } from './WitnessProvider.js';
import { Witness } from './Witness.js';

const domNode = document.querySelector('.mainListContainer');
const eventHub = document.querySelector('.container')

const render = witnesses => {
  domNode.innerHTML = witnesses.map(Witness).join('');
};

export const WitnessList = () => {
  getWitnesses()
    .then(() => {
      const witnesses = useWitnesses();
      render(witnesses);
    });
};