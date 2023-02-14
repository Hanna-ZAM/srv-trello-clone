"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUser = void 0;
const user_1 = require("../models/user");
const handleError = (res, error) => {
    res.status(500).send(error.message);
};
const getUser = (req, res) => {
    user_1.User
        .find({ login: req.params.login })
        .then((users) => res.status(200).json(users))
        .catch((error) => {
        handleError(res, error);
    });
};
exports.getUser = getUser;
const addUser = (req, res) => {
    const { login, password, name, surname } = req.body;
    user_1.User
        .find({ login })
        .then((users) => {
        if (!users.length) {
            const user = new user_1.User({ login, password, name, surname });
            user
                .save()
                .then((us) => res.status(200).json(us));
        }
        else {
            res.status(501).json("Impossible");
        }
    })
        .catch((error) => {
        handleError(res, error);
    });
};
exports.addUser = addUser;
/*module.exports = {
  getUser,
  addUser,
};*/
//# sourceMappingURL=api-user-controller.js.map