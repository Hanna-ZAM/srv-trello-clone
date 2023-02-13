const express = require('express');
const {
  getUser,
  addUser,
  
} = require('../controllers/api-user-controller');

const router = express.Router();

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

module.exports = router;
