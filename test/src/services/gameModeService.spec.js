import { gameModeService } from 'services';

describe('gameModeService', () => {
  let expectedResult;
  let result;

  describe('getGameModes', () => {
    // eslint-disable-next-line arrow-parens
    beforeEach(async () => {
      result = await gameModeService.getGameModes();
    });

    it('should retrieve the result', () => {
      expectedResult = [
        { name: 'tetris', modes: ['1 player', '2 player', '3 player', '4 player'] },
        { name: 'snake', modes: ['1 player', '2 player', '3 player', '4 player'] },
        { name: 'pacman', modes: ['1 player', '2 player', '3 player', '4 player'] }
      ];
      return result.should.eql(expectedResult);
    });
  });
});
