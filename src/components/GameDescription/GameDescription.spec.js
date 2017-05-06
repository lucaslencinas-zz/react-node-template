import React from 'react';
import { shallow } from 'enzyme';
import GameDescription from './GameDescription';

describe('GameDescription', () => {
  let game;
  let gameDescription;
  let onOpenEditGameForm;

  beforeEach(() => {
    game = {
      name: 'someGame',
      description: 'some description',
      link: 'someGame.html',
      types: ['singlePlayer', 'multiPlayer'],
      teamSizes: []
    };
    onOpenEditGameForm = sandbox.spy();
    gameDescription = shallow(
      <GameDescription
        game={game}
        onOpenEditGameForm={onOpenEditGameForm}
      />
    );
  });

  it('should be rendered', () => (
    gameDescription.should.exist
  ));

  it('renders the all the fields of a game', () => {
    gameDescription.find('[data-test-id="fields-description"]').exists().should.eql(true);
    gameDescription.find('[data-test-id="fields-link"]').exists().should.eql(true);
    gameDescription.find('[data-test-id="fields-types"]').exists().should.eql(true);
    gameDescription.find('[data-test-id="fields-team-sizes"]').exists().should.eql(true);
  });

  it('renders the edit button', () => {
    const editButton = gameDescription.find('h3 > span');
    editButton.text().should.eql('Edit');
    editButton.prop('onClick').should.eql(onOpenEditGameForm);
  });

  context('when clicking on the edit button', () => {
    beforeEach(() => {
      gameDescription.find('h3 > span').simulate('click');
    });

    it('the onOpenEditGameForm function should have been called', () => (
      onOpenEditGameForm.should.have.been.called
    ));
  });
});
