const express = require('express');
const bodyParser = require('body-parser');
const gameController = require('../controllers/gameController');

export function api() {
  // eslint-disable-next-line new-cap
  const router = express.Router();
  router.use(bodyParser.json())

  .get('/games', gameController.get)
  .post('/games', gameController.post);

  return router;
}
