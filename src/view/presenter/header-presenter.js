import { render, RenderPosition } from '../../framework/render.js';
import Info from '../header-view/info-view.js';
import TripInfo from '../header-view/trip-info-view.js';
import TripInfoCost from '../header-view/trip-info-cost.js';
import Filters from '../header-view/trip-filters-view.js';
import TripButton from '../header-view/trip-filter-button.js';

export default class HeaderPresenter {
  constructor({mainContainer, filtersContainer}) {
    this.mainContainer = mainContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {
    render(new Info(), this.mainContainer, RenderPosition.AFTERBEGIN);
    const tripInfo = document.querySelector('.trip-main__trip-info');
    render(new TripInfo(), tripInfo);
    render(new TripInfoCost(), tripInfo);

    render(new Filters(), this.filtersContainer);
    const tripMain = document.querySelector('.trip-main');
    render(new TripButton(), tripMain);
  }
}
