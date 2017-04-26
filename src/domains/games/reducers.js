import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

const reducers = handleActions({

  [actionTypes.FETCH_GAMES]: {
    next(state = {}, action) {
      const games = action.payload;

      return {
        ...state,
        games
      };
    }
  }
}, []);

export default reducers;
