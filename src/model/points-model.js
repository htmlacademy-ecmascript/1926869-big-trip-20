import { points } from '../mock/points.js';

export default class PointsModel {
  #tripPoints = points;
  get points() {
    return this.#tripPoints;
  }
}
