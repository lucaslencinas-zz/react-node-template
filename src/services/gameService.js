import { format } from 'url';
import 'whatwg-fetch';

export function getGames() {
  const url = format({
    hostname: 'localhost',
    port: 3000,
    pathname: '/api/v1/games'
  });

  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json());
}

export function deleteGame(game) {
  const url = format({
    hostname: 'localhost',
    port: 3000,
    pathname: `/api/v1/games/${game.slug}`
  });

  return fetch(url, { method: 'DELETE' })
    .then(checkStatus)
    .then(() => game);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
