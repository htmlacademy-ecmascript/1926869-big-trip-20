import { render } from '../../render.js';
import CreateSort from '../main-view/sort.js';
import CreateList from '../main-view/list.js';
import CreatePoint from '../main-view/create-point.js';
import Point from '../main-view/pont.js';
import EditPoint from '../main-view/edit-point.js';
import CreatePointOffers from '../main-view/create-point-offers.js';
import CreatePointDestination from '../main-view/create-point-destination-view.js';


export default class EventsPresenter {
  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new CreateSort(), this.eventsContainer);
    render(new CreateList(), this.eventsContainer);
    const listElement = document.querySelector('.trip-events__list');
    render(new EditPoint(), listElement);
    for (let i = 0; i < 3; i++) {
      render(new Point(), listElement);
    }
    render(new CreatePoint(), listElement);
    render(new CreatePointOffers(), listElement);
    render(new CreatePointDestination(), listElement);
  }
}
