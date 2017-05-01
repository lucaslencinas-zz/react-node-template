import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const initialState = {};

const reducers = handleActions({

  [actionTypes.SELECT_GAME]: {
    next(state = initialState, action) {
      const game = action.payload;

      return {
        ...state,
        selectedGame: game
      };
    }
  },
  [actionTypes.OPEN_CREATE_GAME_FORM]: {
    next(state = initialState) {
      return {
        ...state,
        isCreateGameFormOpen: true
      };
    }
  },
  [actionTypes.CLOSE_CREATE_GAME_FORM]: {
    next(state = initialState) {
      return {
        ...state,
        isCreateGameFormOpen: false
      };
    }
  }
}, []);

export default reducers;
