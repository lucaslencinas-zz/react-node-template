const database = require('../db');

function get() {
  return database.find({ a: 1 }, 'games');
}

function getAll() {
  return database.search({}, 'games');
}

function post() {
  return database.insert({ b: 1 }, 'games');
}

function remove() {
  return database.remove({ b: 1 }, 'games');
}

function update() {
  return database.remove({ a: 1 }, { b: 1 }, 'games');
}

module.exports = {
  get,
  getAll,
  post,
  remove,
  update
};
