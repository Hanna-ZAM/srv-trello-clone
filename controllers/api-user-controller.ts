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

  export const changeUser = (req:Request, res:Response) => {
    const { _id, login , password, name, surname, projects} = qs.parse(req.body);
    console.log(_id);
    User
    .findByIdAndUpdate(_id, { login , password, name, surname, projects }, { new: true })
    .then((user:userType) =>  {
      console.log(user)
           res.set(options).status(200).json(user)
    }).catch((error:Error) =>{
        handleError(res, error)
      } );
    }


  export const getProject = (req:Request&{params:{id:string}}, res:Response) => {

    Project
       .find({_id: req.params.id})

       .then((projects:ProjectType[]) =>  {
         res.set(options).status(200).json(projects[0])
       }).catch((error:Error) =>{
         handleError(res, error)
       });
   }

   export const addProject = (req:Request, res:Response) => {
    const { name , key, lead, type, checked, columns} = qs.parse(req.body);
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
        const project = new Project({name , key, lead, type, checked, columns});
        console.log(project)
      project
        .save()
        .then((proj) => res.set(options).status(200).json(project))
     /* } else {
        res.set(options).status(501).send('rere')
      }})*/
      .catch((error:Error) =>{
        handleError(res, error)
      } );
    }

   export const changeProject = (req:Request, res:Response) => {
    const _id=req.params.id;
    const { name , key, lead, type, checked, columns} = qs.parse(req.body);
    console.log(_id);
    Project
    .findByIdAndUpdate(_id, { name , key, lead, type, checked, columns }, { new: true })
    .then((project:ProjectType) =>  {
      console.log(project)
           res.set(options).status(200).json(project)
    }).catch((error:Error) =>{
        handleError(res, error)
      } );
    }

    export const deleteProject = (req:Request, res:Response) => {
      const  _id  = req.params.id;
      Project
      .findByIdAndDelete(_id)
      .then((project:ProjectType) => res.status(200).json(_id))
      .catch((error:Error) => handleError(res, error));
    }

   export const getColumn = (req:Request&{params:{id:string}}, res:Response) => {
    Column
          .find({_id: req.params.id})
          .then((columns: ProjectColumnsType[]) =>{
            console.log(columns)
            res.set(options).status(200).json(columns[0])
       }).catch((error:Error) =>{
         handleError(res, error)
       });
   }

   export const addColumn = (req:Request, res:Response) => {
    const { title, cards} =qs.parse(req.body);
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
        const column = new Column({title, cards});
        console.log(column)
      column
        .save()
        .then((col) => res.set(options).status(200).json(column))
     /* } else {
        res.set(options).status(501).send('rere')
      }})*/
      .catch((error:Error) =>{
        handleError(res, error)
      } );
    }

   export const changeColumn = (req:Request, res:Response) => {
    const _id=req.params.id;
    const { title, cards} = qs.parse(req.body);
    console.log(_id);
    Column
    .findByIdAndUpdate(_id, { title, cards }, { new: true })
    .then((column:ProjectColumnsType) =>  {
      console.log(column)
           res.set(options).status(200).json(column)
    }).catch((error:Error) =>{
        handleError(res, error)
      } );
    }

    export const deleteColumn = (req:Request, res:Response) => {
      const  _id = req.params.id;
      Column
      .findByIdAndDelete(_id)
      .then((column:ProjectColumnsType) => res.status(200).json(_id))
      .catch((error:Error) => handleError(res, error));
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

   export const addCard = (req:Request, res:Response) => {
    const {text} = qs.parse(req.body);
    console.log(req.body)
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
        const card = new Card({text});
       /* console.log(card)*/
      card
        .save()
        .then((cardNew) => res.set(options).status(200).json(card))
     /* } else {
        res.set(options).status(501).send('rere')
      }})*/
      .catch((error:Error) =>{
        handleError(res, error)
      } );
    }

export const changeCard = (req:Request, res:Response) => {
    const _id=req.params.id;
    const { text} = qs.parse(req.body);
    console.log(_id);
    Card
    .findByIdAndUpdate(_id, { text }, { new: true })
    .then((card:ProjectCardType) =>  {
      console.log(card)
           res.set(options).status(200).json(card)
    }).catch((error:Error) =>{
        handleError(res, error)
      } );
    }

    export const deleteCard = (req:Request, res:Response) => {
      const  _id  = req.params.id;
      Card
      .findByIdAndDelete(_id)
      .then((cardOld:ProjectCardType) => res.status(200).json(_id))
      .catch((error:Error) => handleError(res, error));
    }
/*module.exports = {
  getUser,
  addUser,
};*/
