import * as gameService from 'src/services/gameService';

describe('gameService', () => {
  let expectedResult;
  let result;

  describe('getGames', () => {
    // eslint-disable-next-line arrow-parens
    beforeEach(() => {
      result = gameService.getGames();
    });

    it('should retrieve the result', () => {
      expectedResult = [
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
      return result.should.eql(expectedResult);
    });
  });
});
