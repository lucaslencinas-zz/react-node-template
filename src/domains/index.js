import {
  actions as gamesActions,
  actionTypes as gamesActionTypes,
  selectors as gamesSelectors,
  reducers as gamesReducers
} from './games';

const actions = {
  ...gamesActions
};

const actionTypes = {
  ...gamesActionTypes
};

const selectors = {
  ...gamesSelectors
};

const reducers = {
  games: gamesReducers
};

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
