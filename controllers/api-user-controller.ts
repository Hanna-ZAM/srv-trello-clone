import {User} from '../models/user';
import {Project} from '../models/project';
import {Column} from '../models/column';
import {Card} from '../models/card';
import  {bodyUserType, ProjectType, userType, ProjectColumnsType, ProjectCardType}  from '../models/types';
import { Request, Response} from 'express';
import * as qs from 'qs'

const options={
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Credentials" : 'true ',
};

const handleError = (res:Response, error:Error) => {

  res.set(options).status(500).send(error.message);
}

export const getUser = (req:Request&{params:{login:string}}, res:Response) => {

 User
    .find({login: req.params.login})
    .then((users:userType[]) =>  {
      res.set(options).status(200).json(users)
    }).catch((error:Error) =>{
      handleError(res, error)
    });
}

export const addUser = (req:Request, res:Response) => {
  const {login , password, name, surname, projects} = qs.parse(req.body);
  User
  .find({login})
  .then((users:userType[]) =>  {

   if (!users.length) {
      const user = new User({login , password, name, surname, projects});
      console.log(user)
    user
      .save()
      .then((us) => res.set(options).status(200).json(user))
    } else {
      res.set(options).status(501).send('rere')
    }})
    .catch((error:Error) =>{
      handleError(res, error)
    } );
  }

  export const getProject = (req:Request&{params:{id:string}}, res:Response) => {

    Project
       .find({_id: req.params.id})

       .then((projects:ProjectType[]) =>  {
       /* let project=projects[0];
        const columns= project.columns;
        columns.map((col, ind)=>{
          Column
          .find({_id: col})
          .then((columnes: ProjectColumnsType[]) =>{

           project= project.columns.splice(ind, 1, Json.stringify(columnes[0]));
            const cards= column.cards;
            cards.map=>((card, ind) =>{
              Card
              .find({_id: card})
              .then(card=>{
                project.columns[ind].cards=card;
            })
          })
        })
        console.log(project)*/
         res.set(options).status(200).json(projects[0])
       }).catch((error:Error) =>{
         handleError(res, error)
       });
   }

   export const getColumn = (req:Request&{params:{id:string}}, res:Response) => {
    Column
          .find({_id: req.params.id})
          .then((columns: ProjectColumnsType[]) =>{
            res.set(options).status(200).json(columns[0])
       }).catch((error:Error) =>{
         handleError(res, error)
       });
   }

   export const getCard = (req:Request&{params:{id:string}}, res:Response) => {
    Card
          .find({_id: req.params.id})
          .then((cards: ProjectCardType[]) =>{
            res.set(options).status(200).json(cards[0])
       }).catch((error:Error) =>{
         handleError(res, error)
       });
   }


/*module.exports = {
  getUser,
  addUser,
};*/
