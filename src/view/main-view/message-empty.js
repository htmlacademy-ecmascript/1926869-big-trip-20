import {createElement} from '../../render.js';

function createMessageEmpty() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class CreateMessageEmpty {
  getTemplate() {
    return createMessageEmpty();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
