import React from 'react';
import PropTypes from 'prop-types';
import { GamesList, GameDescription } from 'src/components';
import styles from './Home.css';

const Home = ({ games, selectedGame, onSelectGame, onDeleteGame }) => (
  <div className={styles.home}>
    <h1 className={styles.title}><div className={styles.arrowRight} />React Node Template</h1>
    <div className={styles.content}>
      <GamesList
        games={games}
        onSelectGame={onSelectGame}
        selectedGame={selectedGame}
        onDeleteGame={onDeleteGame}
      />
      <GameDescription game={selectedGame} />
    </div>
  </div>
);

Home.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  selectedGame: PropTypes.object,
  onSelectGame: PropTypes.func,
  onDeleteGame: PropTypes.func
};

export default Home;
