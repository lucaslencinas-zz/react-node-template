import { connect } from 'react-redux';
import { Home } from 'src/components';
import async from 'src/containers/async';
import {
  actions,
  selectors
} from 'src/domains';

const homeState = (state) => ({
  games: selectors.games(state)
});

const resolve = ({ dispatch }) => {
  const gamesPromise = dispatch(actions.fetchGames());
  return Promise.all([gamesPromise]);
};

export default async(resolve)(connect(homeState)(Home));
