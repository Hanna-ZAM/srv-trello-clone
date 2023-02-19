"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const api_user_controller_1 = require("../controllers/api-user-controller");
exports.router = express_1.default.Router();
// Get User by Login
exports.router.get('/:login', api_user_controller_1.getUser);
exports.router.post('/', api_user_controller_1.addUser);
exports.router.put('/:login', api_user_controller_1.changeUser);
// Get Project by ID
exports.router.get('/projects/:id', api_user_controller_1.getProject);
exports.router.post('/projects/', api_user_controller_1.addProject);
exports.router.put('/projects/:id', api_user_controller_1.changeProject);
exports.router.delete('/projects/:id', api_user_controller_1.deleteProject);
exports.router.get('/projects/columns/:id', api_user_controller_1.getColumn);
exports.router.post('/projects/columns/', api_user_controller_1.addColumn);
exports.router.put('/projects/columns/:id', api_user_controller_1.changeColumn);
exports.router.delete('/projects/columns/:id', api_user_controller_1.deleteColumn);
exports.router.get('/projects/columns/cards/:id', api_user_controller_1.getCard);
exports.router.post('/projects/columns/cards/', api_user_controller_1.addCard);
exports.router.put('/projects/columns/cards/:id', api_user_controller_1.changeCard);
exports.router.delete('/projects/columns/cards/:id', api_user_controller_1.deleteCard);
//# sourceMappingURL=api-post-routes.js.map