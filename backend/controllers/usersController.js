const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const cookieParser = require('cookie-parser'); // for the auth token
const moment = require('moment');

// Defining methods for the usersController
module.exports = {
  register: function (req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    } = req.body;
    db.User.create({
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
        console.log('ERROR: ' + err.errors[0].message);
      });
  },
  authenticate: function (req, res) {
    const { email, password } = req.body;
    db.User.findAll({
      where: {
        email: email,
      },
    }).then((userMatch) => {
      //check username
      if (!userMatch[0]) {
        res.status(401).json({ message: 'Error: Invalid username' });
      }

      //check password
      else if (!bcrypt.compareSync(password, userMatch[0].password)) {
        res.status(401).json({ message: 'Error: Incorrect password' });
      } else {
        const payload = {
          email: userMatch[0].email,
          firstName: userMatch[0].firstName,
          lastName: userMatch[0].lastName,
          id: userMatch[0].id,
        };
        const signOptions = {
          expiresIn: '2h',
        };
        const token = jwt.sign(payload, 'secret', signOptions);
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      }
    });
  },
  checkToken: function (req, res) {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      UserId: req.body.UserId,
    };
    res.status(200).send('user authenticated');
  },
  getUser: function (req, res) {},
  logout: function (req, res) {
    res.clearCookie('token');
    res.send('cookie cleared');
  },
  updateUser: function (req, res) {
    const id = req.params.id;
    const update = req.body;
    const options = {
      new: true,
    };

    db.User.findByIdAndUpdate(id, update, options).then((updatedUser) => {
      res.json(updatedUser);
    });
  },
};
