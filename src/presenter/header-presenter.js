import { render, RenderPosition } from '../framework/render.js';
import CreateHeaderInfo from '../view/header/header-view.js';
import CreateHeaderFilterForm from '../view/header/header-filter-form.js';
import CreateHeaderButton from '../view/header/header-button-new-event.js';

export default class HeaderPresenter {
  headerTripMain = document.querySelector('.trip-main');

  init() {
    render(new CreateHeaderInfo(), this.headerTripMain, RenderPosition.AFTERBEGIN); // точки и ценой
    const tripControlsFilter = this.headerTripMain.querySelector('.trip-controls__filters');
    render(new CreateHeaderFilterForm(), tripControlsFilter); // фильтр
    render(new CreateHeaderButton(), this.headerTripMain);
  }
}
