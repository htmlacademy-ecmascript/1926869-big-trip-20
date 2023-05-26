import AbstractView from '../../framework/view/abstract-view.js';

function createInfoTemplate() {
  return `<div class="trip-main">
  <section class="trip-main__trip-info  trip-info">
  </section>`;
}

export default class Info extends AbstractView {
  get template() {
    return createInfoTemplate();
  }
}
