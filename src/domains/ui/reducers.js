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
  [actionTypes.ENTER_CREATE_MODE]: {
    next(state = initialState) {
      return {
        ...state,
        isCreating: true
      };
    }
  },
  [actionTypes.LEAVE_CREATE_MODE]: {
    next(state = initialState) {
      return {
        ...state,
        isCreating: false
      };
    }
  },
  [actionTypes.ENTER_EDIT_MODE]: {
    next(state = initialState) {
      return {
        ...state,
        isEditing: true
      };
    }
  },
  [actionTypes.LEAVE_EDIT_MODE]: {
    next(state = initialState) {
      return {
        ...state,
        isEditing: false
      };
    }
  }
}, {});

export default reducers;
