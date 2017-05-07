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
  },
  [actionTypes.EDIT_GAME]: {
    next(state = initialState, action) {
      const updatedGame = action.payload.game;
      const previousSlugGame = action.payload.previousGame.slug;
      const gameIndex = state.allGames.findIndex((game) => game.slug === previousSlugGame);
      const newGames = state.allGames.slice();
      newGames[gameIndex] = updatedGame;

      const finalState = {
        ...state,
        allGames: newGames
      };
      return finalState;
    }
  }
}, {});

export default reducers;
