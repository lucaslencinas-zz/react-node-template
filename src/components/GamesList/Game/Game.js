import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

const Game = ({
  game,
  isSelected,
  onSelect
}) => (
  <div className={styles.game} onClick={() => onSelect(game)}>
    {`${game.name}${isSelected ? ' is selected' : ''}`}
  </div>
);

Game.propTypes = {
  game: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Game;
