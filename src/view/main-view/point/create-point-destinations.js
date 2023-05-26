import AbstractView from '../../../framework/view/abstract-view.js';

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


export default class CreatePointDestinations extends AbstractView {
  #destinations = null;
  constructor(destinations) {
    super();
    this.#destinations = destinations;
  }

  get template() {
    return createPointDestinations(this.#destinations);
  }
}


