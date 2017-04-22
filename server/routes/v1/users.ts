import { Request, Response, NextFunction} from 'express';
import * as userRepo from '../../data/users/index';
import { IUser } from '../../data/users/interfaces';
import dispatch from './../../observers';
import * as actions from '../../observers/actionCreators';

export function getUsers(req: Request, res: Response, next: NextFunction):void {
  userRepo.retrieveAsync()
    .then(users =>
      res.status(200).json(users)
    )
    .catch(next);
}

export function postUsers(req: Request, res: Response, next: NextFunction):void {
  const newUser : IUser = req.body;

  userRepo.createAsync(newUser)
    .then(ids => {
      dispatch(actions.createA());
      return res.sendStatus(201)
    })
    .catch(next);
}

export function putUsers(req: Request, res: Response, next: NextFunction):void {
  const email : String = req.params.email;
  const user : IUser = req.body;

  userRepo.updateAsync(email, user)
    .then(count => {
      dispatch(actions.createB());
      return res.sendStatus(200);
    })
    .catch(next);
}
