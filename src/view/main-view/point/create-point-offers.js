import AbstractView from '../../../framework/view/abstract-view.js';


function createPointOffers(routePointsModel, offerModel) {
  const {type, id, offers} = routePointsModel;


  function createOfferTemplate(offersList) {
    return offersList.map((offer) =>
      `<div class="event__offer-selector">
         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${offer.id}" type="checkbox" name="event-offer-${type}" ${offers.includes(offer.id) ? 'checked' : ''}>
         <label class="event__offer-label" for="event-offer-${type}-${id}">
           <span class="event__offer-title">${offer.title}</span>
           &plus;&euro;&nbsp;
           <span class="event__offer-price">${offer.price}</span>
         </label>
       </div>`).join('');
  }


  return `<section class="event__details">
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
      ${createOfferTemplate(offerModel)}

    </div>
  </section>

</section>`;
}

export default class CreatePointOffers extends AbstractView {
  #routePointsModel = null;
  #offerModel = null;
  constructor(routePointsModel, offerModel) {
    super();
    this.#routePointsModel = routePointsModel;
    this.#offerModel = offerModel;
  }

  get template() {
    return createPointOffers(this.#routePointsModel, this.#offerModel);
  }
}