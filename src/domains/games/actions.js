import { createAction } from 'redux-actions';
import * as gameService from 'src/services/gameService';
import actionTypes from './actionTypes';

const actions = {
  fetchGames: createAction(actionTypes.FETCH_GAMES, gameService.getGames),
  deleteGame: createAction(actionTypes.DELETE_GAME, gameService.deleteGame),
  selectGame: createAction(actionTypes.SELECT_GAME)
};

export default actions;
