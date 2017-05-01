import React from 'react';
import { shallow } from 'enzyme';
import GameCreateForm from './GameCreateForm';

describe('GameCreateForm', () => {
  let game;
  let gameDescription;

  beforeEach(() => {
    game = {
      name: 'tetris',
      description: 'some tetris description',
      link: 'some link',
      types: ['multiplayer', 'singleplayer'],
      teamSizes: [1, 2, 4]
    };
    gameDescription = shallow(
      <GameCreateForm
        game={game}
      />
    );
  });

  it('should render a GameCreateForm component', () => gameDescription.should.exist);
});
