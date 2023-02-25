"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCard = exports.changeCard = exports.addCard = exports.getCard = exports.deleteColumn = exports.changeColumn = exports.addColumn = exports.getColumn = exports.deleteProject = exports.changeProject = exports.addProject = exports.getProject = exports.changeUser = exports.addUser = exports.getUser = void 0;
const user_1 = require("../models/user");
const project_1 = require("../models/project");
const column_1 = require("../models/column");
const card_1 = require("../models/card");
const qs = __importStar(require("qs"));
const options = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": 'true ',
};
const handleError = (res, error) => {
    res.set(options).status(500).send(error.message);
};
const getUser = (req, res) => {
    user_1.User
        .find({ login: req.params.login })
        .then((users) => {
        res.set(options).status(200).json(users);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getUser = getUser;
const addUser = (req, res) => {
    const { login, password, name, surname, projects } = qs.parse(req.body);
    user_1.User
        .find({ login })
        .then((users) => {
        if (!users.length) {
            const user = new user_1.User({ login, password, name, surname, projects });
            console.log(user);
            user
                .save()
                .then((us) => res.set(options).status(200).json(user));
        }
        else {
            res.set(options).status(501).send(`user ${name} already exists`);
        }
    })
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addUser = addUser;
const changeUser = (req, res) => {
    const _id = req.params.id;
    const { login, password, name, surname, projects } = qs.parse(req.body);
    console.log(_id);
    user_1.User
        .findByIdAndUpdate(_id, { login, password, name, surname, projects }, { new: true })
        .then((user) => {
        console.log(user);
        res.set(options).status(200).json(user);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.changeUser = changeUser;
const getProject = (req, res) => {
    project_1.Project
        .find({ _id: req.params.id })
        .then((projects) => {
        res.set(options).status(200).json(projects[0]);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getProject = getProject;
const addProject = (req, res) => {
    const { id, name, key, lead, type, checked, columns } = qs.parse(req.body);
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
    const project = new project_1.Project({ id, name, key, lead, type, checked, columns });
    console.log(project);
    project
        .save()
        .then((proj) => res.set(options).status(200).json(project))
        /* } else {
           res.set(options).status(501).send('rere')
         }})*/
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addProject = addProject;
const changeProject = (req, res) => {
    const _id = req.params.id;
    const { id, name, key, lead, type, checked, columns } = qs.parse(req.body);
    console.log(_id);
    project_1.Project
        .findByIdAndUpdate(_id, { id, name, key, lead, type, checked, columns }, { new: true })
        .then((project) => {
        console.log(project);
        res.set(options).status(200).json(project);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.changeProject = changeProject;
const deleteProject = (req, res) => {
    const _id = req.params.id;
    project_1.Project
        .findByIdAndDelete(_id)
        .then((project) => res.status(200).json(_id))
        .catch((error) => handleError(res, error));
};
exports.deleteProject = deleteProject;
const getColumn = (req, res) => {
    column_1.Column
        .find({ _id: req.params.id })
        .then((columns) => {
        console.log(columns);
        res.set(options).status(200).json(columns[0]);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getColumn = getColumn;
const addColumn = (req, res) => {
    const { id, title, cards } = qs.parse(req.body);
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
    const column = new column_1.Column({ id, title, cards });
    console.log(column);
    column
        .save()
        .then((col) => res.set(options).status(200).json(column))
        /* } else {
           res.set(options).status(501).send('rere')
         }})*/
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addColumn = addColumn;
const changeColumn = (req, res) => {
    const _id = req.params.id;
    const { id, title, cards } = qs.parse(req.body);
    console.log(_id);
    column_1.Column
        .findByIdAndUpdate(_id, { id, title, cards }, { new: true })
        .then((column) => {
        console.log(column);
        res.set(options).status(200).json(column);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.changeColumn = changeColumn;
const deleteColumn = (req, res) => {
    const _id = req.params.id;
    column_1.Column
        .findByIdAndDelete(_id)
        .then((column) => res.status(200).json(_id))
        .catch((error) => handleError(res, error));
};
exports.deleteColumn = deleteColumn;
const getCard = (req, res) => {
    card_1.Card
        .find({ _id: req.params.id })
        .then((cards) => {
        res.set(options).status(200).json(cards[0]);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getCard = getCard;
const addCard = (req, res) => {
    const { id, text } = qs.parse(req.body);
    console.log(req.body);
    /*Project
    .find({name})
    .then((projects:ProjectType[]) =>  {

     if (!projects.length) {*/
    const card = new card_1.Card({ id, text });
    /* console.log(card)*/
    card
        .save()
        .then((cardNew) => res.set(options).status(200).json(card))
        /* } else {
           res.set(options).status(501).send('rere')
         }})*/
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addCard = addCard;
const changeCard = (req, res) => {
    const _id = req.params.id;
    const { id, text } = qs.parse(req.body);
    console.log(_id);
    card_1.Card
        .findByIdAndUpdate(_id, { id, text }, { new: true })
        .then((card) => {
        console.log(card);
        res.set(options).status(200).json(card);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.changeCard = changeCard;
const deleteCard = (req, res) => {
    const _id = req.params.id;
    card_1.Card
        .findByIdAndDelete(_id)
        .then((cardOld) => res.status(200).json(_id))
        .catch((error) => handleError(res, error));
};
exports.deleteCard = deleteCard;
/*module.exports = {
  getUser,
  addUser,
};*/
//# sourceMappingURL=api-user-controller.js.map