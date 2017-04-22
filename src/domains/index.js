import {
  actions as gameModesActions,
  actionTypes as gameModesActionTypes,
  selectors as gameModesSelectors,
  reducers as gameModesReducers
} from './gameModes';

const actions = {
  ...gameModesActions
};

const actionTypes = {
  ...gameModesActionTypes
};

const selectors = {
  ...gameModesSelectors
};

const reducers = {
  gameModes: gameModesReducers
};

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
