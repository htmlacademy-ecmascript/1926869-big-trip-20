import AbstractView from '../../../framework/view/abstract-view.js';

function createPointForm() {
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">

</form>
</li>`;
}

export default class CreatePointForm extends AbstractView {
  get template() {
    return createPointForm();
  }
}
