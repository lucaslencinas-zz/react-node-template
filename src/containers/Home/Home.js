import { connect } from 'react-redux';
import { Home } from 'src/components';
import async from 'src/containers/async';
import {
  actions,
  selectors
} from 'src/domains';

const homeState = (state) => ({
  games: selectors.allGames(state),
  selectedGame: selectors.selectedGame(state),
  isCreateGameFormOpen: selectors.isCreateGameFormOpen(state)
});

const homeAction = (dispatch) => ({
  onSelectGame: (payload) => {
    dispatch(actions.selectGame(payload));
    dispatch(actions.closeCreateGameFrom());
  },
  onDeleteGame: (payload) => dispatch(actions.deleteGame(payload)),
  onCreateGame: (payload) => dispatch(actions.createGame(payload)),
  onCancelCreateGame: () => dispatch(actions.closeCreateGameFrom()),
  onOpenCreateGameForm: () => dispatch(actions.openCreateGameFrom())
});

const resolve = ({ dispatch }) => dispatch(actions.fetchGames());

export default async(resolve)(connect(homeState, homeAction)(Home));
