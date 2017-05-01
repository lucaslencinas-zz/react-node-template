import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateGame.css';

const CreateGame = ({ onOpenCreateGameForm, isCreateGameFormOpen }) => (
  <div className={styles.createGame}>
    <div
      display-if={!isCreateGameFormOpen}
      className={styles.createGameButton}
      onClick={onOpenCreateGameForm}
    >
      + Create Game
    </div>
  </div>
);

CreateGame.propTypes = {
  onOpenCreateGameForm: PropTypes.func,
  isCreateGameFormOpen: PropTypes.bool
};

export default CreateGame;
