const User = require('../models/user');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

/*const getUsers = (req, res) => {
  User
    .find()
    .sort({ userId: -1 })
    .then((users) => res.status(200).json(users))
    .catch((error) => handleError(res, error));
}*/

const addUser = (req, res) => {
  const { login, password, name, surname } = req.body;
  const user = new User({  password, name, surname  });
  user
    .save()
    .then((user) => res.status(200).json(user))
    .catch((error) => handleError(res, error));
}

const getUser = (req, res) => {
  User
    .findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((error) => handleError(res, error));
}

/*const deletePost = (req, res) => {
  const { userId } = req.params;
  User
  .findByIdAndDelete(userId)
  .then((user) => res.status(200).json(userId))
  .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
  const {  password, name, surname } = req.body;
  const { userId } = req.params;
  User
    .findByIdAndUpdate(userId, { password, name, surname }, { new: true })
    .then((user) => res.json(user))
    .catch((error) => handleError(res, error));
}*/

module.exports = {
  addUser,
  getUser
};
