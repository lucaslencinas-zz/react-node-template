import React from 'react';
import { ControlPanel } from 'src/components';
import propTypes from './PropTypes';
import styles from './Home.css';

const Home = ({
  allGameModes
}) => (
  <div className={styles.home}>
    <h1 className={styles.title}>React Node Template</h1>
    <ControlPanel allGameModes={allGameModes} />
  </div>
);

Home.propTypes = propTypes;
export default Home;
