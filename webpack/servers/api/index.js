const express = require('express');
const bodyParser = require('body-parser');
const gameController = require('../controllers/gameController');

export function api() {
  // eslint-disable-next-line new-cap
  const router = express.Router();
  router.use(bodyParser.json())

  .get('/game', gameController.get)
  .post('/game', gameController.post);

  return router;
}
