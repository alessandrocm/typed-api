import { users } from './queries';
import { IUser } from './interfaces';
import { Collection, fromJS } from 'immutable';
import * as Bluebird from 'bluebird';

export function retrieveAsync() : Bluebird<any> {
  return users()
    .select()
    .then(results => fromJS(results));
}

export function createAsync(user : IUser | IUser[]) : Bluebird<Number[]> {
  return users()
    .insert(user);
}

export function updateAsync(email : String, user : IUser) : Bluebird<Number> {
  return users()
    .where({email})
    .update({...user, "updated_at": (new Date())});
}
