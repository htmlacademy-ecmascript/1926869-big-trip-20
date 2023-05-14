import HeaderPresenter from './view/presenter/header-presenter.js';
import EventsPresenter from './view/presenter/events-presenter.js';
import DestinationModel from './model/destination-model.js';
import OfferModel from './model/offers-model.js';
const tripMain = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const headerPresenter = new HeaderPresenter({
  mainContainer: tripMain,
  filtersContainer: filtersElement
});

const destinationsModel = new DestinationModel();
const offerModel = new OfferModel();
const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents,
  destinationsModel,
  offerModel
});

headerPresenter.init();
eventsPresenter.init();
