import { render } from '../framework/render.js';
import CreateTripList from '../view/body/list-view.js';
import CreateSort from '../view/body/sort-view.js';
import EditTripPoint from '../view/body/edit-form-view.js';
import CreatePoint from '../view/body/point-view.js';
import { getRandomArrayElement } from '../utils.js';

export default class BoardPresenter {
  constructor({ pointsModel, offersModel, destinationsModel }) {
    this.points = [...pointsModel.points];
    this.offers = { ...offersModel.offers };
    this.offersTypes = [...offersModel.offersTypes];
    this.destinations = [...destinationsModel.destinations];
  }


  tripBoardList = document.querySelector('.trip-events');

  createTripList = new CreateTripList();
  init() {
    render(new CreateSort(), this.tripBoardList); // сортировка
    render(this.createTripList, this.tripBoardList); // создает список <ul>

    const pointForEditForm = getRandomArrayElement(this.points);
    render(new EditTripPoint(
      pointForEditForm,
      this.offers[pointForEditForm.type],
      this.offersTypes,
      this.destinations
    ), this.createTripList.element);
    this.points.forEach((point) => {
      const offers = this.offers[point.type];
      render(new CreatePoint(point, offers), this.createTripList.element);
    });
  }

}
