const User = require('../models/user');


const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getUser = (req, res) => {
 User
    .find({login: req.params.login})
    .then((users) =>  res.status(200).json(users))
    .catch((error) =>{
      handleError(res, error)
    } );
}

const addUser = (req, res) => {
  const {login, password, name, surname} = req.body;
  User
  .find({login: login})
  .then((users) =>  {
    if (!users.length) {
      const user = new User({login , password, name, surname});
    user
      .save()
      .then((user) => res.status(200).json(user))
    } else {
      res.status(501).json("Impossible")
    }})
    .catch((error) =>{
      handleError(res, error)
    } );
  }

module.exports = {
  getUser,
  addUser,
};
