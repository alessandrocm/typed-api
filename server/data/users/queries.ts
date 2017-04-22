import query from '../db';

export function users() {
  return query('users').clone();
}
