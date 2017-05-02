import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

const actions = {
  selectGame: createAction(actionTypes.SELECT_GAME),
  enterCreateMode: createAction(actionTypes.ENTER_CREATE_MODE),
  leaveCreateMode: createAction(actionTypes.LEAVE_CREATE_MODE),
  enterEditMode: createAction(actionTypes.ENTER_EDIT_MODE),
  leaveEditMode: createAction(actionTypes.LEAVE_EDIT_MODE)
};

export default actions;
