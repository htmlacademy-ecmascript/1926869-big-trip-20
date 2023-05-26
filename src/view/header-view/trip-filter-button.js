import AbstractView from '../../framework/view/abstract-view.js';

function createTripButton() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
}

export default class TripButton extends AbstractView{
  get template() {
    return createTripButton();
  }
}
