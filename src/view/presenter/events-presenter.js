import { render } from '../../render.js';
import CreateSort from '../main-view/sort.js';
import CreateList from '../main-view/list.js';
import PointEdit from '../main-view/point-endt.js';
import Point from '../main-view/point.js';
import { getRandomArrayElement } from '../../utils.js';


export default class EventsPresenter {
  constructor({eventsContainer, routePointsModel, offerModel,destinationModel}) {
    this.eventsContainer = eventsContainer;
    this.routePointsModel = routePointsModel;
    this.offerModel = offerModel;
    this.destinationModel = destinationModel;
  }

  init() {
    this.tripRoute = getRandomArrayElement([...this.routePointsModel.getRoutePoints()]);
    this.points = [...this.routePointsModel.getRoutePoints()];
    this.offerModel = [...this.offerModel.getByType(this.tripRoute)];
    this.destination = [...this.destinationModel.getDestinations()];
    // console.log(this.destinationModel.getById(this.points)[i])
    render(new CreateSort(), this.eventsContainer); // сортировка
    render(new CreateList(), this.eventsContainer); // создает список (<ul>)
    const pointEdit = new PointEdit();
    pointEdit.getElement(
      this.tripRoute,
      this.offerModel,
      this.destinationModel.getById(this.tripRoute)
    );

    const listElement = document.querySelector('.trip-events__list');
    for (let i = 0; i < this.points.length; i++) {
      render(new Point(this.points[i], this.destinationModel.getById(this.points[i])), listElement);
    }
  }
}
