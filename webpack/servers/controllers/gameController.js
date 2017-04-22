const gameService = require('../services/gameService');

export function get(req, res) {
  return gameService.get()
    .then((game) => res.json(game));
}

export function post(req, res) {
  return gameService.post()
    .then((game) => res.json(game));
}
