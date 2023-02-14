"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const api_user_controller_1 = require("../controllers/api-user-controller");
exports.router = express_1.default.Router();
// Get All Posts
exports.router.get('/:login', api_user_controller_1.getUser);
// Add New Post
exports.router.post('/', api_user_controller_1.addUser);
// Get Post by ID
/*router.get('/api/post/:id', getPost);
// Delete Post by ID
router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);*/
/*module.exports = router;*/
//# sourceMappingURL=api-post-routes.js.map