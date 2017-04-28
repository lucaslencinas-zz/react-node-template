import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

const Game = ({
  game,
  isSelected,
  onSelectGame,
  onDeleteGame
}) => (
  <div className={`${styles.game} ${isSelected ? styles.selected : ''}`}>
    <div className={styles.gameName} onClick={() => onSelectGame(game)} >
      {game.name}
    </div>
    <div className={styles.deleteGame} onClick={() => onDeleteGame(game)}>X</div>
  </div>
);

Game.propTypes = {
  game: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelectGame: PropTypes.func,
  onDeleteGame: PropTypes.func
};

export default Game;
