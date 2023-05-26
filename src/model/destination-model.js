import {mockDestinations} from '../mock/destination.js';

export default class DestinationModel {
  #destinations = mockDestinations;

  get destinations() {
    return this.#destinations;
  }

  getById(routePoint) {
    return this.#destinations.find((destination) => destination.id === routePoint.id);
  }
}
