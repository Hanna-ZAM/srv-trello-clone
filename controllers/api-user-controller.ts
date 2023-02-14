import {User} from '../models/user';
import  {bodyUserType, /*requestUser, */userType/*, responseUser*/}  from '../models/types';
import { Request, Response} from 'express';


const handleError = (res:Response, error:Error) => {
  res.status(500).send(error.message);
}

export const getUser = (req:Request&{params:{login:string}}, res:Response) => {
 User
    .find({login: req.params.login})
    .then((users:userType[]) =>  res.status(200).json(users))
    .catch((error:Error) =>{
      handleError(res, error)
    } );
}

export const addUser = (req:Request, res:Response) => {
  const {login, password, name, surname}:bodyUserType = req.body;
  User
  .find({login})
  .then((users:userType[]) =>  {
    if (!users.length) {
      const user = new User({login , password, name, surname});
    user
      .save()
      .then((us) => res.status(200).json(us))
    } else {
      res.status(501).json("Impossible")
    }})
    .catch((error:Error) =>{
      handleError(res, error)
    } );
  }

/*module.exports = {
  getUser,
  addUser,
};*/
