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
        <p><div>Description: </div><div>{game.description}</div></p>
        <p><div>Link: </div><div>{game.link}</div></p>
        <p><div>Types: </div><div>{game.types}</div></p>
        <p><div>Team Sizes: </div><div>{game.teamSizes}</div></p>
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
