import HeaderPresenter from './view/presenter/header-presenter.js';
import EventsPresenter from './view/presenter/events-presenter.js';

const tripMain = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const headerPresenter = new HeaderPresenter({
  mainContainer: tripMain,
  filtersContainer: filtersElement
});

const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents
});

headerPresenter.init();
eventsPresenter.init();
