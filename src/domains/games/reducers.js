import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const initialState = {
  allGames: []
};

const reducers = handleActions({

  [actionTypes.FETCH_GAMES]: {
    next(state = initialState, action) {
      const allGames = action.payload;

      return {
        ...state,
        allGames
      };
    }
  },
  [actionTypes.DELETE_GAME]: {
    next(state = initialState, action) {
      const game = action.payload;
      const allGames = state.allGames.filter((gameInState) => gameInState.slug !== game.slug);

      return {
        ...state,
        allGames
      };
    }
  },
  [actionTypes.CREATE_GAME]: {
    next(state = initialState, action) {
      const newGame = action.payload;

      return {
        ...state,
        allGames: state.allGames.concat([newGame])
      };
    }
  }
}, []);

export default reducers;
