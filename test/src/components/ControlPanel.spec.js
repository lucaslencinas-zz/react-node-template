import React from 'react';
import { shallow } from 'enzyme';
import { ControlPanel } from 'components';

describe('ControlPanel', () => {
  let allGameModes;
  let component;

  beforeEach(() => {
    allGameModes = [
      { name: 'tetris', modes: ['1 player', '2 player', '3 player', '4 player'] },
      { name: 'snake', modes: ['1 player', '2 player', '3 player', '4 player'] },
      { name: 'pacman', modes: ['1 player', '2 player', '3 player', '4 player'] }
    ];
    component = shallow(
      <ControlPanel
        allGameModes={allGameModes}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
