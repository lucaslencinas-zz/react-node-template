import React from 'react';
import { shallow } from 'enzyme';
import { Home } from 'components';

describe('Home', () => {
  let allGameModes;
  let component;

  beforeEach(() => {
    allGameModes = [];
    component = shallow(
      <Home
        allGameModes={allGameModes}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
