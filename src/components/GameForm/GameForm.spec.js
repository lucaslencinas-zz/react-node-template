import React from 'react';
import { shallow } from 'enzyme';
import GameForm from './GameForm';

describe('GameForm', () => {
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
      <GameForm
        game={game}
      />
    );
  });

  it('should render a GameForm component', () => gameDescription.should.exist);
});
