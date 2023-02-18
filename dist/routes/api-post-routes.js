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
// Add New User
exports.router.post('/', api_user_controller_1.addUser);
// Get Project by ID
exports.router.get('/projects/:id', api_user_controller_1.getProject);
exports.router.get('/projects/columns/:id', api_user_controller_1.getColumn);
exports.router.get('/projects/columns/cards/:id', api_user_controller_1.getCard);
// Get Column by ID
/*router.get('/projects/:id', getProject);
// Delete Post by ID
/*router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);*/
/*module.exports = router;*/
//# sourceMappingURL=api-post-routes.js.map