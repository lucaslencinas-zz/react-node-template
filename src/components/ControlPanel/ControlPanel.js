import React from 'react';
import propTypes from './PropTypes';
import styles from './ControlPanel.css';

const selectGameMode = ({ e, message }) => {
  e.preventDefault();
  alert(message);
};

const ControlPanel = ({
  allGameModes
}) => (
  <div className={styles.controlPanel}>
    {allGameModes.map((gameMode, index) => (
      <div
        key={index}
        className={styles.gameMode}
        onClick={(e) => selectGameMode({ e, message: `There has been a click in ${gameMode.name} gameMode` })}
      >
        <a href="#" className={styles.gameModeLink}>{`${gameMode.name} and ${gameMode.modes}`}</a>
      </div>
    ))}
  </div>
);

ControlPanel.propTypes = propTypes;
export default ControlPanel;
