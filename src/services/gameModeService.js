const gameModeService = {
  // eslint-disable-next-line arrow-parens
  getGameModes: async () => {
    const gameModes = [
      { name: 'tetris', modes: ['1 player', '2 player', '3 player', '4 player'] },
      { name: 'snake', modes: ['1 player', '2 player', '3 player', '4 player'] },
      { name: 'pacman', modes: ['1 player', '2 player', '3 player', '4 player'] }
    ];
    return await gameModes;
  }
};

export default gameModeService;
