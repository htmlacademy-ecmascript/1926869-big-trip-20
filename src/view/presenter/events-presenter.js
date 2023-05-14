import { render } from '../../render.js';
import CreateSort from '../main-view/sort.js';
import CreateList from '../main-view/list.js';
import CreatePointForm from '../main-view/point/create-point-form.js';
import CreatePointHeader from '../main-view/point/create-point-header.js';
import CreatePointOffers from '../main-view/point/create-point-offers.js';
import CreatePointDestinations from '../main-view/point/create-point-destinations.js';
import Point from '../main-view/pont.js';
import { getRandomArrayElement } from '../../utils.js';


export default class EventsPresenter {
  constructor({eventsContainer, destinationsModel, offerModel}) {
    this.eventsContainer = eventsContainer;
    this.destinationsModel = destinationsModel;
    this.offerModel = offerModel;
  }

  init() {
    this.destinations = [...this.destinationsModel.getDestinations()];
    this.offerModel = [...this.offerModel.getOffers()];
    // const getDestination = (point) => this.destinations.find((item) => item.id === point.destination);

    render(new CreateSort(), this.eventsContainer); // сортировка
    render(new CreateList(), this.eventsContainer); // создает список (<ul>)
    const listElement = document.querySelector('.trip-events__list');
    render(new CreatePointForm(), listElement); // создаёт форму в списке (li >> form)
    const eventForm = listElement.querySelector('.event--edit');
    render(new CreatePointHeader(), eventForm);
    render(new CreatePointOffers({
      offers: getRandomArrayElement(this.offerModel)
    }), eventForm);
    const eventDetails = listElement.querySelector('.event__details');
    render(new CreatePointDestinations({
      destination: getRandomArrayElement(this.destinations)
    }), eventDetails);

    // console.log(getRandomArrayElement(this.offerModel))

    for (let i = 0; i < 3; i++) {
      render(new Point(), listElement);
    }
  }
}
