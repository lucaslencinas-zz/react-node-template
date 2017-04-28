import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const initialState = {
  games: [],
  selectedGame: {}
};

const reducers = handleActions({

  [actionTypes.FETCH_GAMES]: {
    next(state = initialState, action) {
      const games = action.payload;

      return {
        ...state,
        games
      };
    }
  },
  [actionTypes.SELECT_GAME]: {
    next(state = initialState, action) {
      const game = action.payload;

      return {
        ...state,
        selectedGame: game
      };
    }
  },
  [actionTypes.DELETE_GAME]: {
    next(state = initialState, action) {
      const game = action.payload;
      const games = state.games.filter((gameInState) => gameInState.slug !== game.slug);

      return {
        ...state,
        games,
        selectedGame: !state.selectedGame || state.selectedGame.slug === game.slug ? undefined : state.selectedGame
      };
    }
  }
}, []);

export default reducers;
