import {createElement} from '../../render.js';

function createMessageLoading() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class CreateMessageLoading {
  getTemplate() {
    return createMessageLoading();
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
