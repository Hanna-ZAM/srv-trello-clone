import express from 'express';
import  { getUser, addUser, changeUser, getProject, changeProject, addProject, deleteProject, getColumn, changeColumn, addColumn, deleteColumn, getCard, changeCard, addCard, deleteCard} from '../controllers/api-user-controller';

export const router = express.Router();

// Get User by Login
router.get('/:login', getUser);
router.post('/', addUser);
router.put('/:login', changeUser);
// Get Project by ID
router.get('/projects/:id', getProject);
router.post('/projects/', addProject);
router.put('/projects/:id', changeProject);
router.delete('/projects/:id', deleteProject);

router.get('/projects/columns/:id', getColumn);
router.post('/projects/columns/', addColumn);
router.put('/projects/columns/:id', changeColumn);
router.delete('/projects/columns/:id', deleteColumn);

router.get('/projects/columns/cards/:id', getCard);
router.post('/projects/columns/cards/', addCard);
router.put('/projects/columns/cards/:id', changeCard);
router.delete('/projects/columns/cards/:id', deleteCard);

