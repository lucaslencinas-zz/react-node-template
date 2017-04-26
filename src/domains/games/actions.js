import { createAction } from 'redux-actions';
import * as gameService from 'src/services/gameService';
import actionTypes from './actionTypes';

const actions = {
  fetchGames: createAction(actionTypes.FETCH_GAMES, gameService.getGames)
};

export default actions;
