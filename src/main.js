import HeaderPresenter from './view/presenter/header-presenter.js';
import EventsPresenter from './view/presenter/events-presenter.js';
import RoutePointsModel from './model/route-points-model.js';
import OfferModel from './model/offers-model.js';
import DestinationModel from './model/destination-model.js';
const tripMain = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const headerPresenter = new HeaderPresenter({
  mainContainer: tripMain,
  filtersContainer: filtersElement
});

const routePointsModel = new RoutePointsModel();
const offerModel = new OfferModel();
const destinationModel = new DestinationModel();
const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents,
  routePointsModel,
  offerModel,
  destinationModel
});

headerPresenter.init();
eventsPresenter.init();
