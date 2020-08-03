import { useAssociates } from './CriminalProvider.js';
import { Associate } from './Associate.js';

const eventHub = document.querySelector('.container');

export const AssociateList = criminalId => {
  const contentTarget = document.querySelector(`#criminal--${criminalId}`);

  const associates = useAssociates(criminalId);

  contentTarget.innerHTML += `
    <div class="associates-wrapper" id="associates-wrapper--${criminalId}">
      <button class="btn associates__close-button" id="close-associates--${criminalId}">Hide Associates</button>
      <h4 class="associates__header">Associates</h4>
      <ul class="associates">
        ${associates.map(Associate).join('')}
      </ul>
    </div>
  `;
};

eventHub.addEventListener('associatesRequested', event => {
  const criminalId = event.detail.criminalId;

  AssociateList(criminalId);
});

/**
 * Remove self from DOM on click, broadcast event saying this AssociateList was closed
 */
eventHub.addEventListener('click', event => {
  if(event.target.id.startsWith('close-associates--')) {
    const criminalId = event.target.id.split('--')[1];

    document.querySelector(`#associates-wrapper--${criminalId}`).remove();

    const associateListClosedEvent = new CustomEvent('associateListClosed', {
      detail: {
        criminalId: parseInt(criminalId)
      }
    });

    eventHub.dispatchEvent(associateListClosedEvent);
  }
});