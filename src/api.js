// @flow

const baseUrl = 'https://yard.moscow/api/v1';

export function get(resource: string) {
  return fetch(encodeURI(`${baseUrl}${resource}`)).then(res => res.json());
}

export function post(resource: string) {
  return fetch(encodeURI(`${baseUrl}${resource}`), { method: 'POST' }).then(res => res.json());
}
