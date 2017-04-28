import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import styles from './GamesList.css';

const GamesList = ({
  games,
  selectedGame,
  onSelectGame,
  onDeleteGame
}) => (
  <div className={styles.gamesList}>
    <h3 className={styles.gameListTitle}>Games</h3>
    {games.map((game) => (
      <Game
        game={game}
        key={game.name}
        isSelected={(selectedGame || {}).slug === game.slug}
        onSelectGame={onSelectGame}
        onDeleteGame={onDeleteGame}
      />
    ))}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  selectedGame: PropTypes.object,
  onSelectGame: PropTypes.func,
  onDeleteGame: PropTypes.func
};

export default GamesList;
