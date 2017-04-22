import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const reducers = handleActions({

  [actionTypes.FETCH_GAME_MODES]: {
    next(state = {}, action) {
      const allGameModes = action.payload;

      return {
        ...state,
        allGameModes
      };
    }
  }
}, []);

export default reducers;
