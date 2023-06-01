import { render } from '../framework/render.js';
import CreateTripList from '../view/list-view.js';
import CreateSort from '../view/sort-view.js';
import EditTripPoint from '../view/edit-form-view.js';
import CreatePoint from '../view/point-view.js';

export default class BoardPresenter {

  tripBoardList = document.querySelector('.trip-events');

  createTripList = new CreateTripList();
  init() {
    render(new CreateSort(), this.tripBoardList); // сортировка
    render(this.createTripList, this.tripBoardList); // создает список <ul>
    render(new EditTripPoint(), this.createTripList.element);

    for (let i = 0; i < 3; i++) {
      render(new CreatePoint(), this.createTripList.element);
    }
  }

}
