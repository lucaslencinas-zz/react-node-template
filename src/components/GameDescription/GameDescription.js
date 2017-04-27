import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameDescription.css';

const GameDescription = ({
  game
}) => {
  const renderGameContent = () => (
    <div>
      <h3>{game.name}</h3>
      <div>
        <p><span>Description: </span><span>{game.description}</span></p>
        <p><span>Link: </span><span>{game.link}</span></p>
        <p><span>Types: </span><span>{game.types}</span></p>
        <p><span>Team Sizes: </span><span>{game.teamSizes}</span></p>
      </div>
    </div>
  );

  const renderEmptyContent = () => (
    <div className={styles.emptyContent}>
      <div>
        Select a Game
      </div>
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
