import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game', () => {
  let game;
  let gameComponent;

  beforeEach(() => {
    game = {
      name: 'tetris',
      description: 'some tetris description',
      link: 'some link',
      types: ['multiplayer', 'singleplayer'],
      teamSizes: [1, 2, 4]
    };
    gameComponent = shallow(
      <Game
        game={game}
      />
    );
  });

  it('should render a gameComponent', () => gameComponent.should.exist);
});
