import express from 'express';
import  { getUser, addUser, getProject, getColumn, getCard } from '../controllers/api-user-controller';

export const router = express.Router();

// Get User by Login
router.get('/:login', getUser);
// Add New User
router.post('/', addUser);
// Get Project by ID
router.get('/projects/:id', getProject);
router.get('/projects/columns/:id', getColumn);
router.get('/projects/columns/cards/:id', getCard);
// Get Column by ID
/*router.get('/projects/:id', getProject);
// Delete Post by ID
/*router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);*/

/*module.exports = router;*/
