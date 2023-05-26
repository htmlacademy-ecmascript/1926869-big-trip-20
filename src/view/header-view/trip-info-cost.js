import AbstractView from '../../framework/view/abstract-view.js';

function createTripInfoCost() {
  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
</p>`;
}

export default class TripInfoCost extends AbstractView {
  get template() {
    return createTripInfoCost();
  }
}
