import React from 'react';
import { shallow } from 'enzyme';
import GameDescription from './GameDescription';

describe('GameDescription', () => {
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
      <GameDescription
        game={game}
      />
    );
  });

  it('should render a GameDescription component', () => gameDescription.should.exist);
});
