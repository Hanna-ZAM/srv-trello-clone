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
exports.getCard = exports.getColumn = exports.getProject = exports.addUser = exports.getUser = void 0;
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
            res.set(options).status(501).send('rere');
        }
    })
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addUser = addUser;
const getProject = (req, res) => {
    project_1.Project
        .find({ _id: req.params.id })
        .then((projects) => {
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
        res.set(options).status(200).json(projects[0]);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getProject = getProject;
const getColumn = (req, res) => {
    column_1.Column
        .find({ _id: req.params.id })
        .then((columns) => {
        res.set(options).status(200).json(columns[0]);
    }).catch((error) => {
        handleError(res, error);
    });
};
exports.getColumn = getColumn;
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
/*module.exports = {
  getUser,
  addUser,
};*/
//# sourceMappingURL=api-user-controller.js.map