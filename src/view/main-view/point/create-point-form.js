import {createElement} from '../../../render.js';

function createPointForm() {
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">

</form>
</li>`;
}

export default class CreatePointForm {
  getTemplate() {
    return createPointForm();
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
