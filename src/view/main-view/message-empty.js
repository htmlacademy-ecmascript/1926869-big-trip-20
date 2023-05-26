import AbstractView from '../../framework/view/abstract-view.js';

function createMessageEmpty() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class CreateMessageEmpty extends AbstractView {
  get template() {
    return createMessageEmpty();
  }
}
