import React from 'react';
import PropTypes from 'prop-types';
import { GamesList, GameDescription, GameCreateForm } from 'src/components';
import styles from './Home.css';

const Home = ({
  games,
  selectedGame,
  onSelectGame,
  onDeleteGame,
  onCreateGame,
  onCancelCreateGame,
  onOpenCreateGameForm,
  isCreateGameFormOpen
}) => (
  <div className={styles.home}>
    <h1 className={styles.title}><div className={styles.arrowRight} />React Node Template</h1>
    <div className={styles.content}>
      <div className={styles.list}>
        <GamesList
          games={games}
          onSelectGame={onSelectGame}
          selectedGame={selectedGame}
          onDeleteGame={onDeleteGame}
          onOpenCreateGameForm={onOpenCreateGameForm}
          isCreateGameFormOpen={isCreateGameFormOpen}
        />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.game}>
          <GameDescription display-if={!isCreateGameFormOpen} game={selectedGame} />
          <GameCreateForm display-if={isCreateGameFormOpen} onCreateGame={onCreateGame} onCancelCreateGame={onCancelCreateGame} />
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  selectedGame: PropTypes.object,
  onSelectGame: PropTypes.func,
  onDeleteGame: PropTypes.func,
  onCreateGame: PropTypes.func,
  onCancelCreateGame: PropTypes.func,
  onOpenCreateGameForm: PropTypes.func,
  isCreateGameFormOpen: PropTypes.bool
};

export default Home;
