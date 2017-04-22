import { connect } from 'react-redux';
import { Home } from 'components';
import async from 'containers/async';
import {
  actions,
  selectors
} from 'domains';

const homeState = (state) => ({
  allGameModes: selectors.allGameModes(state)
});

const resolve = ({ dispatch }) => {
  // Initialize gameModes
  const gameModesPromise = dispatch(actions.fetchGameModes());
  return Promise.all([gameModesPromise]);
};

export default async(resolve)(connect(homeState)(Home));
