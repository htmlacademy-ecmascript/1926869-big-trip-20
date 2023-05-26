import { render } from '../../framework/render.js';
import CreatePointForm from './point/create-point-form.js';
import CreatePointHeader from './point/create-point-header.js';
import CreatePointOffers from './point/create-point-offers.js';
import CreatePointDestinations from './point/create-point-destinations.js';

export default class PointEdit {

  getTemplate(routePointsModel, offerModel, destinationModel) {
    const listElement = document.querySelector('.trip-events__list');
    render(new CreatePointForm(), listElement);
    const eventForm = listElement.querySelector('.event--edit');
    render(new CreatePointHeader(routePointsModel), eventForm);
    render(new CreatePointOffers(routePointsModel, offerModel), eventForm);
    const eventDetails = listElement.querySelector('.event__details');
    render(new CreatePointDestinations(destinationModel), eventDetails);
  }
}
