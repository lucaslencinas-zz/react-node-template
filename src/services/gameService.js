import { format } from 'url';
import 'whatwg-fetch';

export function getGames() {
  const url = format({
    hostname: 'localhost',
    port: 3000,
    pathname: '/api/v1/games'
  });

  return fetch(url)
    .then((response) => response.json());
}
