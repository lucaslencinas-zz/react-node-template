import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let games;
  let component;

  beforeEach(() => {
    games = [];
    component = shallow(
      <Home
        games={games}
      />
    );
  });

  it('should render a component', () => (
    component.should.exist
  ));
});
