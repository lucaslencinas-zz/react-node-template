import { connect } from 'react-redux';
import { Home } from 'src/components';
import async from 'src/containers/async';
import {
  actions,
  selectors
} from 'src/domains';

const homeState = (state) => ({
  allGameModes: selectors.allGameModes(state)
});

const resolve = ({ dispatch }) => {
  // Initialize gameModes
  const gameModesPromise = dispatch(actions.fetchGameModes());
  return Promise.all([gameModesPromise]);
};

export default async(resolve)(connect(homeState)(Home));
