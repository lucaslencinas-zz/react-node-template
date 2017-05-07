import {
  actions as gamesActions,
  actionTypes as gamesActionTypes,
  selectors as gamesSelectors,
  reducers as gamesReducers
} from './games';

import {
  actions as uiActions,
  actionTypes as uiActionTypes,
  selectors as uiSelectors,
  reducers as uiReducers
} from './ui';

const actions = {
  ...gamesActions,
  ...uiActions
};

const actionTypes = {
  ...gamesActionTypes,
  ...uiActionTypes
};

const selectors = {
  ...gamesSelectors,
  ...uiSelectors
};

const reducers = {
  games: gamesReducers,
  ui: uiReducers
};

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
