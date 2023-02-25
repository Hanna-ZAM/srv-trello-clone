import express from 'express';
import  { getUser, addUser, changeUser, getProject, changeProject, addProject, deleteProject, getColumn, changeColumn, addColumn, deleteColumn, getCard, changeCard, addCard, deleteCard} from '../controllers/api-user-controller';
import cors from 'cors';
export const router = express.Router();

const corsOptions={
    origin: "anoplich.github.io/rs-trello",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  const issue2options = {
    origin: true,
    methods: ["PUT"],
    credentials: true,
  };

// Get User by Login
router.get('/:login', getUser);
router.post('/', addUser);
router.put('/:id', changeUser);
router.options("/:id", cors(issue2options), (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "anoplich.github.io/rs-trello");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
  });
// Get Project by ID
router.get('/projects/:id', getProject);
router.post('/projects/', addProject);
router.put('/projects/:id', changeProject);
router.delete('/projects/:id', deleteProject);
router.options("/projects/:id", cors(issue2options), (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', "anoplich.github.io/rs-trello");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

router.get('/projects/columns/:id', getColumn);
router.post('/projects/columns/', addColumn);
router.put('/projects/columns/:id', changeColumn);
router.delete('/projects/columns/:id', deleteColumn);
router.options('/projects/columns/:id', cors(issue2options), (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', "anoplich.github.io/rs-trello");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

router.get('/projects/columns/cards/:id', getCard);
router.post('/projects/columns/cards/', addCard);
router.put('/projects/columns/cards/:id', changeCard);
router.delete('/projects/columns/cards/:id', deleteCard);
router.options('/projects/columns/cards/:id', cors(issue2options), (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', "anoplich.github.io/rs-trello");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});


