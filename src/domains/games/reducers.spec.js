import { actionTypes, reducers } from 'src/domains/games';

describe('games reducer', () => {
  const games = [
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
    },
    {
      name: 'simon',
      description: 'some simon description',
      link: 'some link',
      types: ['multiplayer', 'singleplayer'],
      teamSizes: [1, 2, 4]
    },
    {
      name: 'pong',
      description: 'some pong description',
      link: 'some link',
      types: ['multiplayer', 'singleplayer'],
      teamSizes: [1, 2, 4]
    },
    {
      name: 'pacman',
      description: 'some pacman description',
      link: 'some link',
      types: ['multiplayer', 'singleplayer'],
      teamSizes: [1, 2, 4]
    }
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

    describe('and games are fetched', () => {
      before(() => {
        action = { type: actionTypes.FETCH_GAMES, payload: games };
        result = reducers(state, action);
      });

      it('should store the games', () => result.games.should.be.deep.equal(games));
    });
  });
});
