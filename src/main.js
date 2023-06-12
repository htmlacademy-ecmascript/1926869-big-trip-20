import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();

const headerPresenter = new HeaderPresenter();
const boardPresenter = new BoardPresenter({
  pointsModel,
  offersModel,
  destinationsModel
});


headerPresenter.init();
boardPresenter.init();
