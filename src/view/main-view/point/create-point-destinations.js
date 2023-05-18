import {createElement} from '../../../render.js';

function createPictureTemplate(pictures) {
  return pictures.map((picture) =>
    `<img class="event__photo" src="${picture.src}" alt="Event photo">`).join('');
}

function createPointDestinations(description) {
  return `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description.description}</p>
  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${createPictureTemplate(description.pictures)}
    </div>
  </div>
</section>`;
}


export default class CreatePointDestinations {
  constructor(destinations) {
    this.destination = destinations;
  }

  getTemplate() {
    return createPointDestinations(this.destination);
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


