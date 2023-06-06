import { render } from '../framework/render.js';
import CreateTripList from '../view/body/list-view.js';
import CreateSort from '../view/body/sort-view.js';
import EditTripPoint from '../view/body/edit-form-view.js';
import CreatePoint from '../view/body/point-view.js';
import CreateTripPointFormView from '../view/body/create-form-view.js';
import EmptyListMessage from '../view/empty-list.js';

export default class BoardPresenter {
  #points = null;
  #offers = null;
  #offersTypes = null;
  #destinations = null;
  constructor({ pointsModel, offersModel, destinationsModel }) {
    this.#points = [...pointsModel.points];
    this.#offers = { ...offersModel.offers };
    this.#offersTypes = [...offersModel.offersTypes];
    this.#destinations = [...destinationsModel.destinations];
  }

  tripBoardList = document.querySelector('.trip-events');

  createTripList = new CreateTripList();
  init() {
    if (this.#points.length) {
      render(new CreateSort(), this.tripBoardList); // сортировка
      render(this.createTripList, this.tripBoardList); // создает список <ul>
      render(new CreateTripPointFormView(), this.createTripList.element);

      this.#points.forEach(this.#renderPoint.bind(this));
    }
    render(new EmptyListMessage, this.tripBoardList);
  }

  #renderPoint(pointData) {
    const offers = this.#offers[pointData.type];
    const point = new CreatePoint(pointData, offers);
    const poinRollupBtnElement = point.element.querySelector('.event__rollup-btn');

    const pointEditForm = new EditTripPoint(
      pointData,
      this.#offers[pointData.type],
      this.#offersTypes,
      this.#destinations
    );


    poinRollupBtnElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      point.element.replaceWith(pointEditForm.element);
      document.addEventListener('keydown', escKeyDownHandler);
    });

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeEditForm(evt);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    const editFormElement = pointEditForm.element.querySelector('.event');

    function closeEditForm(evt) {
      evt.preventDefault();
      pointEditForm.element.replaceWith(point.element);
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    editFormElement.addEventListener('submit', closeEditForm);

    render(point, this.createTripList.element);
  }

}
