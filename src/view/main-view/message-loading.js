import AbstractView from '../../framework/view/abstract-view.js';

function createMessageLoading() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class CreateMessageLoading extends AbstractView{
  get template() {
    return createMessageLoading();
  }
}
