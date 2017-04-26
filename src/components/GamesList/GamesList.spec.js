import React from 'react';
import { shallow } from 'enzyme';
import GamesList from './GamesList';

describe('GamesList', () => {
  let games;
  let component;

  beforeEach(() => {
    games = [
      {
        name: 'tetris',
        description: 'some tetris description',
        link: 'some link',
        types: ['multiplayer', 'singleplayer'],
        teamSizes: [1, 2, 4]
      },
      {
        name: 'snake',
        description: 'some snake description',
        link: 'some link',
        types: ['multiplayer', 'singleplayer'],
        teamSizes: [1, 2, 4]
      }
    ];
    component = shallow(
      <GamesList
        games={games}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
