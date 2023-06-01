import AbstractView from '../../framework/view/abstract-view.js';

function createHeaderButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" >New event</button>';
}

export default class CreateHeaderButton extends AbstractView {
  get template() {
    return createHeaderButtonTemplate();
  }
}
