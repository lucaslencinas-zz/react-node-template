import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

const actions = {
  selectGame: createAction(actionTypes.SELECT_GAME),
  openCreateGameFrom: createAction(actionTypes.OPEN_CREATE_GAME_FORM),
  closeCreateGameFrom: createAction(actionTypes.CLOSE_CREATE_GAME_FORM)
};

export default actions;
