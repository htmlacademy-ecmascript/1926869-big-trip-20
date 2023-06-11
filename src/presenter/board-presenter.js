import { render, replace } from '../framework/render.js';
import CreateTripList from '../view/body/list-view.js';
import CreateSort from '../view/body/sort-view.js';
import EditTripPoint from '../view/body/edit-form-view.js';
import CreatePoint from '../view/body/point-view.js';
import CreateTripPointFormView from '../view/body/create-form-view.js';
import EmptyListMessage from '../view/empty-list.js';
import { sortings } from '../utils/sort.js';

export default class TripBoardPresenter {
  #boardContainer;
  #points;
  #offers;
  #offersTypes;
  #destinations;

  constructor({ pointsModel, offersModel, destinationsModel }) {
    this.#points = [...pointsModel.points];
    this.#offers = {...offersModel.offers};
    this.#offersTypes = [...offersModel.offersTypes];
    this.#destinations = [...destinationsModel.destinations];
  }

  tripBoardList = document.querySelector('.trip-events');
  createTripList = new CreateTripList();
  init() {
    if (this.#points.length) {
      render(new CreateSort(sortings), this.tripBoardList);
      render(this.createTripList, this.tripBoardList);
      render(new CreateTripPointFormView(), this.tripBoardList);
      this.#points.forEach(this.#renderPoint.bind(this));
    } else {
      render(new EmptyListMessage(), this.#boardContainer);
    }
  }

  #renderPoint(pointData) {
    const offers = this.#offers[pointData.type];
    const pointEditForm = new EditTripPoint(
      pointData,
      this.#offers[pointData.type],
      this.#offersTypes,
      this.#destinations,
      closeEditForm
    );

    const point = new CreatePoint(pointData, offers, () => {
      replace(pointEditForm, point);
      document.addEventListener('keydown', escKeyDownHandler);
    });

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();

        closeEditForm(evt);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    function closeEditForm() {
      replace(point, pointEditForm);
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(point, this.tripBoardList);
  }
}
