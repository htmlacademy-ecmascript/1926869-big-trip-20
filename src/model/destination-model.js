import {mockDestinations} from '../mock/description.js';

export default class DestinationModel {
  destinations = mockDestinations;

  getDestinations() {
    return this.destinations;
  }
}
