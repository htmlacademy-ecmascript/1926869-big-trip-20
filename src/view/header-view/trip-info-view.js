import AbstractView from '../../framework/view/abstract-view.js';

function createTripInfo() {
  return `<div class="trip-info__main">
  <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
</div>`;
}

export default class TripInfo extends AbstractView {
  get template() {
    return createTripInfo();
  }
}
