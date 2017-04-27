import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import styles from './GamesList.css';

const GamesList = ({
  games,
  gameSelected,
  onSelectGame
}) => (
  <div className={styles.gamesList}>
    <h3 className={styles.gameListTitle}>Games</h3>
    {games.map((game) => (<Game game={game} key={game.name} isSelected={gameSelected === game} onSelect={onSelectGame} />))}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  gameSelected: PropTypes.object,
  onSelectGame: PropTypes.func
};

export default GamesList;
