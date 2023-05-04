import { render, RenderPosition } from '../../render.js';
import Info from '../header-view/info-view.js';
import Filters from '../header-view/filter-view.js';

export default class HeaderPresenter {
  constructor({mainContainer, filtersContainer}) {
    this.mainContainer = mainContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {
    render(new Info(), this.mainContainer, RenderPosition.AFTERBEGIN);
    render(new Filters(), this.filtersContainer);
  }
}
