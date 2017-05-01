import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameCreateForm.css';

const emptyContent = {
  name: '',
  description: '',
  link: '',
  teamSizes: '',
  types: ''
};

function getSlugFrom(name) {
  let slug = name.trim();
  slug = slug.replace(/ /g, '_');
  return slug.toLowerCase();
}

class GameCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.handleCancelCreateGame = this.handleCancelCreateGame.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleTeamSizesChange = this.handleTeamSizesChange.bind(this);
    this.handleTypesChange = this.handleTypesChange.bind(this);
    this.state = emptyContent;
  }

  handleCreateGame() {
    this.props.onCreateGame({
      ...this.state,
      slug: getSlugFrom(this.state.name)
    });
    this.setState(emptyContent);
  }

  handleCancelCreateGame() {
    this.props.onCancelCreateGame(this.state);
    this.setState(emptyContent);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleLinkChange(e) {
    this.setState({ link: e.target.value });
  }

  handleTeamSizesChange(e) {
    this.setState({ teamSizes: e.target.value });
  }

  handleTypesChange(e) {
    this.setState({ types: e.target.value });
  }

  render() {
    const { name, description, link, teamSizes, types } = this.state;
    return (
      <div className={styles.gameCreateForm}>
        <h3>Create Game</h3>
        <div className={styles.fields}>
          <div className={styles.fieldset}>
            <div>Name: </div>
            <input
              placeholder="Game name"
              className={styles.inputName}
              value={name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className={styles.fieldset}>
            <div>Description: </div>
            <input
              placeholder="Game description"
              className={styles.inputDescription}
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className={styles.fieldset}>
            <div>Link: </div>
            <input
              placeholder="Game Link"
              className={styles.inputLink}
              value={link}
              onChange={this.handleLinkChange}
            />
          </div>
          <div className={styles.fieldset}>
            <div>Team Sizes: </div>
            <input
              placeholder="Game Team Sizes"
              className={styles.inputTeamSizes}
              value={teamSizes}
              onChange={this.handleTeamSizesChange}
            />
          </div>
          <div className={styles.fieldset}>
            <div>Types: </div>
            <input
              placeholder="Game Types"
              className={styles.inputTypes}
              value={types}
              onChange={this.handleTypesChange}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={this.handleCancelCreateGame}>Cancel</button>
          <button type="button" onClick={this.handleCreateGame}>Create</button>
        </div>
      </div>
    );
  }
}

GameCreateForm.propTypes = {
  onCreateGame: PropTypes.func,
  onCancelCreateGame: PropTypes.func
};

export default GameCreateForm;
