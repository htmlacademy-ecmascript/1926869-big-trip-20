import { createElement } from '../../../render.js';
import { CITY_NAMES, TYPES, EMPTY_ROUTEPOINT } from '../../../const.js';
import { humanizeDate, capitalize } from '../../../utils.js';

const DATE_FORMAT_IN_FORM = 'DD/MM/YY HH:mm';

function createPointHeader(routePoint) {

  const { dateFrom, dateTo, type, basePrice } = routePoint;

  const startTimeInForm = humanizeDate(dateFrom, DATE_FORMAT_IN_FORM);
  const endTimeInForm = humanizeDate(dateTo, DATE_FORMAT_IN_FORM);

  function createEventTypeTemplate(types) {
    return types.map((typeItem) =>
      `<div class="event__type-item">
       <input id="event-type-${typeItem.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeItem.toLowerCase()}">
       <label class="event__type-label  event__type-label--${typeItem.toLowerCase()}" for="event-type-${typeItem.toLowerCase()}-1">${capitalize(typeItem)}</label>
      </div>`).join('');
  }

  function createCityListTemplate(cities) {
    return cities.map((city) => `<option value=${city}></option>`).join('');
  }

  return `<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${createEventTypeTemplate(TYPES)}
      </fieldset>
    </div>
  </div>
  <div class="event__field-group  event__field-group--destination">
    <label class="event__label event__type-output" for="event-destination-1">
      ${capitalize(type)}
    </label>
    <input class="event__input event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva НУЖНО СДЕЛАТЬ" list="destination-list-1">
    <datalist id="destination-list-1">
      ${createCityListTemplate(CITY_NAMES)}
    </datalist>
  </div>
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTimeInForm}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTimeInForm}">
  </div>
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;${basePrice}
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
  </div>
  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Cancel</button>
</header>`;
}

export default class CreatePointHeader {
  constructor(routePoint = EMPTY_ROUTEPOINT) {
    this.routePoint = routePoint;
  }

  getTemplate() {
    return createPointHeader(this.routePoint);
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
