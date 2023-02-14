import express from 'express';
import  { getUser, addUser } from '../controllers/api-user-controller';

export const router = express.Router();

// Get All Posts
router.get('/:login', getUser);
// Add New Post
router.post('/', addUser);
// Get Post by ID
/*router.get('/api/post/:id', getPost);
// Delete Post by ID
router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);*/

/*module.exports = router;*/
