import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';

const headerPresenter = new HeaderPresenter();
const boardPresenter = new BoardPresenter();

headerPresenter.init();
boardPresenter.init();
