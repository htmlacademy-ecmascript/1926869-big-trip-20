import {createElement} from '../../render.js';
import { humanizeDate, getTimeDiff } from '../../utils.js';

const DATE_FORMAT = 'YYYY-MM-DD';
const EVENT_DATE = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

function createPoint(point, destination) {

  const { basePrice, dateFrom, dateTo, type } = point;

  const dateFormat = humanizeDate(dateFrom, DATE_FORMAT);
  const eventDate = humanizeDate(dateFrom, EVENT_DATE);
  const startTime = humanizeDate(dateFrom, TIME_FORMAT);
  const endTime = humanizeDate(dateTo, TIME_FORMAT);
  const durationTime = getTimeDiff(dateFrom, dateTo);


  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateFormat}">${eventDate}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFormat}T${startTime}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateFormat}T${endTime}">${endTime}</time>
      </p>
      <p class="event__duration">${durationTime}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">Order Uber</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">20</span>
      </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn--active" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
}

export default class Point {
  constructor (tripRoute, destination) {
    this.tripRoute = tripRoute;
    this.destination = destination;
  }

  getTemplate() {
    return createPoint(this.tripRoute,this.destination);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
