import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameDescription.css';

const GameDescription = ({
  game,
  onOpenEditGameForm
}) => {
  const renderGameContent = () => (
    <div>
      <h3>{game.name}<span onClick={onOpenEditGameForm}>Edit</span></h3>
      <div className={styles.fields}>
        <div className={styles.fieldset}>
          <div>Description: </div>
          <div>{game.description}</div>
        </div>
        <div className={styles.fieldset}>
          <div>Link: </div>
          <div>{game.link}</div>
        </div>
        <div className={styles.fieldset}>
          <div>Types: </div>
          <div>{game.types}</div>
        </div>
        <div className={styles.fieldset}>
          <div>Team Sizes: </div>
          <div>{game.teamSizes}</div>
        </div>
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
  game: PropTypes.object,
  onOpenEditGameForm: PropTypes.func
};

export default GameDescription;
