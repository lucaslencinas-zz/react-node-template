import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

const Game = ({
  game,
  isSelected,
  onSelect
}) => (
  <div
    className={`${styles.game} ${isSelected ? styles.selected : ''}`}
    onClick={() => onSelect(game)}
  >
    {game.name}
  </div>
);

Game.propTypes = {
  game: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Game;
