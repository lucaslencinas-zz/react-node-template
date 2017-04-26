import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameDescription.css';

const GameDescription = ({
  game
}) => {
  const renderGameContent = () => (
    <div>
      <h4>{game.name}</h4>
      <ul>
        <li>{game.description}</li>
        <li>{game.link}</li>
        <li>{game.types}</li>
        <li>{game.teamSizes}</li>
      </ul>
    </div>
  );

  const renderEmptyContent = () => (
    <div>
      <h4>Select a Game</h4>
    </div>
  );
  return (
    <div className={styles.gameDescription}>
      {game ? renderGameContent() : renderEmptyContent()}
    </div>
  );
};

GameDescription.propTypes = {
  game: PropTypes.object
};

export default GameDescription;
