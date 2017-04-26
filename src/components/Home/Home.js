import React from 'react';
import PropTypes from 'prop-types';
import { GamesList, GameDescription } from 'src/components';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectGame = this.onSelectGame.bind(this);

    this.state = { gameSelected: undefined };
  }

  onSelectGame(game) {
    console.log(game);
    this.setState({ gameSelected: game });
  }

  render() {
    const { games } = this.props;
    const { gameSelected } = this.state;
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>React Node Template</h1>
        <div className={styles.content}>
          <GamesList
            games={games}
            onSelectGame={this.onSelectGame}
            gameSelected={gameSelected}
          />
          <GameDescription game={gameSelected} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object)
};

export default Home;
