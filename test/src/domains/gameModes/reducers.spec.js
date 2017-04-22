import { actionTypes, reducers } from 'domains/gameModes';

describe('gameModes reducer', () => {
  const gameModes = [
    { name: 'tetris', modes: ['1 player', '2 player', '3 player', '4 player'] },
    { name: 'snake', modes: ['1 player', '2 player', '3 player', '4 player'] },
    { name: 'pacman', modes: ['1 player', '2 player', '3 player', '4 player'] }
  ];

  let state;
  let action;
  let result;

  describe('when the state is empty', () => {
    before(() => {
      state = {};
    });

    describe('and no action is triggered', () => {
      before(() => {
        action = {};
        result = reducers(state, action);
      });

      it('should return the initial state', () => result.should.be.deep.equal(state));
    });

    describe('and gameModes are fetched', () => {
      before(() => {
        action = { type: actionTypes.FETCH_GAME_MODES, payload: gameModes };
        result = reducers(state, action);
      });

      it('should store the gameModes', () => result.allGameModes.should.be.deep.equal(gameModes));
    });
  });
});
