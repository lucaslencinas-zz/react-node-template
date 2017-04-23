const database = require('../db').database;

export function get() {
  return database.find({ a: 1 }, 'games');
}

export function getAll() {
  return database.search({}, 'games');
}

export function post() {
  return database.insert({ b: 1 }, 'games');
}

export function remove() {
  return database.remove({ b: 1 }, 'games');
}

export function update() {
  return database.remove({ a: 1 }, { b: 1 }, 'games');
}
